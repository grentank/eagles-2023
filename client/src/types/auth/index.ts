export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type AuthUser =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'authenticated' } & UserType);

export type AuthState = {
  user: AuthUser;
  accessToken: string;
};
