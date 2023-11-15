import { createContext, useContext } from 'react';
import type { AuthState } from '../../types/auth';
import type { AuthHandlersType } from '../../types/auth/handlers';

export const AuthContext = createContext<AuthState | null>(null);
export const AuthHandlersContext = createContext<AuthHandlersType | null>(null);

export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

export function useAuthHandlers(): AuthHandlersType {
  const context = useContext(AuthHandlersContext);
  if (!context) throw new Error('useAuthHandlers must be used within an AuthProvider');
  return context;
}
