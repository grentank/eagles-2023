import type { UserType } from '../auth';

export type MessageType = {
  id: number;
  title: string;
  body: string;
  authorId: number;
  User: UserType;
  createdAt: Date;
  updatedAt: Date;
};

export type AddMesageFormData = {
  title: string;
  body: string;
};

export type MessageAction =
  | { type: 'ADD_MESSAGE'; payload: MessageType }
  | { type: 'EDIT_MESSAGE'; payload: MessageType }
  | { type: 'DELETE_MESSAGE'; payload: MessageType['id'] }
  | { type: 'SET_MESSAGES'; payload: MessageType[] }
  | { type: 'BESSMISLENNII' };

export type MessageSliceState = MessageType[];
