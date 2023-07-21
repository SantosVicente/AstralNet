'use client';

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface User {
  _id: string;
  idOauth: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Comment {
  _id: string;
  content: string;
  page: string;
  author: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  comment: Comment;
  setComment: Dispatch<SetStateAction<Comment>>;
  comments: Comment[];
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

const GlobalContext = createContext<ContextProps>({
  user: {} as User,
  setUser: (): void => {},
  users: [],
  setUsers: (): void => {},
  comment: {} as Comment,
  setComment: (): void => {},
  comments: [],
  setComments: (): void => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User>({} as User);
  const [users, setUsers] = useState<User[]>([]);
  const [comment, setComment] = useState<Comment>({} as Comment);
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <GlobalContext.Provider value={{ user, setUser, users, setUsers, comment, setComment, comments, setComments }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
