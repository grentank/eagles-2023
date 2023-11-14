import type { UserType } from '../auth';

export type PostType = {
  id: number;
  title: string;
  body: string;
  authorId: number;
  User: UserType;
  createdAt: Date;
  updatedAt: Date;
};
