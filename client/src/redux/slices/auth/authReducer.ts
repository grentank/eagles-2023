import type { AuthActions, AuthState } from '../../../types/auth';

const guestState: AuthState = { accessToken: '', user: { status: 'guest' } };
const initState: AuthState = { accessToken: '', user: { status: 'pending' } };

export default function authReducer(state: AuthState = initState, action: AuthActions): AuthState {
  const { type } = action;
  switch (type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return guestState;
    case 'LOGIN_GUEST':
      return guestState;
    default:
      return state;
  }
}
