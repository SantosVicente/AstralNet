'use client';

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { User } from '@/types/User';
import { Comment } from '@/types/Comment';

export type ContextProps = {
  user: User | null;
  signin: (id: string) => Promise<boolean>;
  signout: () => void;
  /*  setUser: Dispatch<SetStateAction<User>>;
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  comment: Comment;
  setComment: Dispatch<SetStateAction<Comment>>;
  comments: Comment[];
  setComments: Dispatch<SetStateAction<Comment[]>>;*/
};

export const AuthContext = createContext<ContextProps>(null!);
