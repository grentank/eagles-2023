import React, { useEffect, useMemo, useReducer } from 'react';
import type { AxiosError } from 'axios';
import { AuthContext, AuthHandlersContext } from './authContext';
import authReducer from './authReducer';
import type { AuthState, LoginFormData, SignupFormData } from '../../types/auth';
import AuthService from '../../services/authService';
import type { LogoutHandlerType } from '../../types/auth/handlers';
import { apiInstance } from '../../services/apiService';

type AuthContextProviderProps = {
  children: JSX.Element;
};

export default function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(authReducer, {
    accessToken: '',
    user: { status: 'pending' },
  });

  useEffect(() => {
    AuthService.check()
      .then((auth) => dispatch({ type: 'LOGIN', payload: auth }))
      .catch(() => dispatch({ type: 'LOGIN_GUEST' }));
  }, []);

  const refreshAuth = async (): Promise<AuthState['accessToken']> => {
    const refreshedAuth = await AuthService.refresh();
    dispatch({ type: 'LOGIN', payload: refreshedAuth });
    return refreshedAuth.accessToken;
  };

  useEffect(() => {
    const requestInterceptor = apiInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${state.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refreshAuth();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      apiInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [state]);

  const loginHandler = async (formData: LoginFormData): Promise<void> => {
    try {
      const newAuth = await AuthService.login(formData);
      dispatch({ type: 'LOGIN', payload: newAuth });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'LOGIN_GUEST' });
    }
  };

  const logoutHandler: LogoutHandlerType = async () => {
    await AuthService.logout();
    dispatch({ type: 'LOGOUT' });
  };

  const signupHandler = async (formData: SignupFormData): Promise<void> => {
    try {
      const newAuth = await AuthService.signup(formData);
      dispatch({ type: 'LOGIN', payload: newAuth });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'LOGIN_GUEST' });
    }
  };

  const memoisedHandlers = useMemo(
    () => ({
      loginHandler,
      logoutHandler,
      signupHandler,
    }),
    [],
  );

  return (
    <AuthContext.Provider value={state}>
      <AuthHandlersContext.Provider value={memoisedHandlers}>
        {children}
      </AuthHandlersContext.Provider>
    </AuthContext.Provider>
  );
}
