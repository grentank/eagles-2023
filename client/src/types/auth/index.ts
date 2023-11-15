export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type UserState =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'authenticated' } & UserType);

export type AuthState = {
  user: UserState;
  accessToken: string;
};

export type AuthActions =
  | { type: 'LOGIN'; payload: AuthState }
  | { type: 'LOGOUT' }
  | { type: 'LOGIN_GUEST' };

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  email: string;
  name: string;
  password: string;
};