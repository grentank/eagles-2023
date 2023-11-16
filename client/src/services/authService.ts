import axios from 'axios';
import type { AuthState, BackendAuth, LoginFormData, SignupFormData } from '../types/auth';

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthService {
  static async refresh(): Promise<AuthState> {
    const response = await authInstance.get<BackendAuth>('/tokens/refresh');
    const { user, accessToken } = response.data;
    const authState: AuthState = {
      accessToken,
      user: { ...user, status: 'authenticated' },
    };
    return authState;
  }

  static async login(formData: LoginFormData): Promise<AuthState> {
    const response = await authInstance.post<BackendAuth>('/auth/login', formData);
    const { user, accessToken } = response.data;
    const authState: AuthState = {
      accessToken,
      user: { ...user, status: 'authenticated' },
    };
    return authState;
  }

  static async signup(formData: SignupFormData): Promise<AuthState> {
    const response = await authInstance.post<BackendAuth>('/auth/signup', formData);
    const { user, accessToken } = response.data;
    const authState: AuthState = {
      accessToken,
      user: { ...user, status: 'authenticated' },
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
    const response = await authInstance.get<BackendAuth>('/auth/check');
    const { user, accessToken } = response.data;
    const authState: AuthState = {
      accessToken,
      user: { ...user, status: 'authenticated' },
    };
    return authState;
  }
}

export default AuthService;
