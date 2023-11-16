import AuthService from '../../../services/authService';
import type { AuthActions, AuthState, LoginFormData, SignupFormData } from '../../../types/auth';
import type { AppDispatch } from '../../store';

export const loginThunk =
  (formData: LoginFormData) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const loggedUser = await AuthService.login(formData);
    dispatch({ type: 'LOGIN', payload: loggedUser } as AuthActions);
  };

export const signupThunk =
  (formData: SignupFormData) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const signedUpUser = await AuthService.signup(formData);
    dispatch({ type: 'LOGIN', payload: signedUpUser } as AuthActions);
  };

export const checkUserThunk =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    const user = await AuthService.check();
    dispatch({ type: 'LOGIN', payload: user } as AuthActions);
  };

export const logoutThunk =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    await AuthService.logout();
    dispatch({ type: 'LOGOUT' } as AuthActions);
  };

export const refreshThunk =
  () =>
  async (dispatch: AppDispatch): Promise<AuthState['accessToken']> => {
    const refreshedAuth = await AuthService.refresh();
    dispatch({ type: 'LOGIN', payload: refreshedAuth });
    return refreshedAuth.accessToken;
  };
