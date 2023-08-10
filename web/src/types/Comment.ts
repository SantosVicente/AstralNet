import { User } from "./User";

export type Comment = {
  _id: string;
  content: string;
  page: string;
  author: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}