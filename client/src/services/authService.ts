import axios from 'axios';
import type { AuthState, LoginFormData, SignupFormData, UserType } from '../types/auth';

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthService {
  static async refresh(): Promise<AuthState> {
    const response = await authInstance.get<AuthState>('/tokens/refresh');
    return response.data;
  }

  static async login(formData: LoginFormData): Promise<AuthState> {
    const response = await authInstance.post<{ user: UserType; accessToken: string }>(
      '/auth/login',
      formData,
    );
    const authState: AuthState = {
      ...response.data,
      user: { ...response.data.user, status: 'authenticated' },
    };
    return authState;
  }

  static async signup(formData: SignupFormData): Promise<AuthState> {
    const response = await authInstance.post<{ user: UserType; accessToken: string }>(
      '/auth/signup',
      formData,
    );
    const authState: AuthState = {
      ...response.data,
      user: { ...response.data.user, status: 'authenticated' },
    };
    return authState;
  }

  static async logout(): Promise<void> {
    try {
      await authInstance.post('/auth/logout');
    } catch (error) {
      console.log(error);
    }
  }

  static async check(): Promise<AuthState> {
    const response = await authInstance.get<{ user: UserType; accessToken: string }>('/auth/check');
    const authState: AuthState = {
      ...response.data,
      user: { ...response.data.user, status: 'authenticated' },
    };
    return authState;
  }
}

export default AuthService;
