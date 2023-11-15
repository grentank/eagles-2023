import axios from 'axios';
import type { AuthState } from '../types/auth';

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthService {
  static async login(formData): Promise<AuthState> {
    const response = await authInstance.post<AuthState>('/auth/login', formData);
    return response.data;
  }

  static async logout(): Promise<void> {
    await authInstance.get('/auth/logout');
  }

  static async refresh(): Promise<AuthState> {
    const response = await authInstance.get<AuthState>('/tokens/refresh');
    return response.data;
  }
}

export default AuthService;
