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
