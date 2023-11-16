import type { AuthActions, AuthState } from '../../types/auth';

export default function authReducer(state: AuthState, action: AuthActions): AuthState {
  const { type } = action;
  switch (type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return { accessToken: '', user: { status: 'guest' } };
    case 'LOGIN_GUEST':
      return { accessToken: '', user: { status: 'guest' } };
    default:
      return state;
  }
}
