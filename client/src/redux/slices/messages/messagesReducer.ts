import type { MessageAction, MessageSliceState } from '../../../types/message';

export default function messagesReducer(
  state: MessageSliceState = [],
  action: MessageAction,
): MessageSliceState {
  const { type } = action;
  switch (type) {
    case 'ADD_MESSAGE':
      return [action.payload, ...state];
    case 'DELETE_MESSAGE':
      return state.filter((message) => message.id !== action.payload);
    case 'EDIT_MESSAGE':
      return state.map((message) => (message.id === action.payload.id ? action.payload : message));
    case 'SET_MESSAGES':
      return action.payload;
    default:
      return state;
  }
}
