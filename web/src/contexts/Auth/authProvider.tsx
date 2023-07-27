'use client';

import { User } from '@/types/User';
import { AuthContext } from './authContext';
import { useEffect, useState } from 'react';
import { useApi } from '@/hooks/useApi';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validadeToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        await signin(token);
      }

      /*
    const validadeToken = async () => {
      const token = localStorage.getItem('token');

      console.log('token', token);

      if (token) {
        const data = await api.validateToken(token);
        console.log(data)
        if (data) {
          setUser(data);
          console.log(user)
        }
      }
    };
    */
    };
    validadeToken();
  }, []);

  const signin = async (id: string) => {
    const data = await api.signin(id);
    if (data._id) {
      setUser(data);
      setToken(data._id);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    setToken('');
  };

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
  };
  /* 
  const [users, setUsers] = useState<User[]>([]);
  const [comment, setComment] = useState<Comment>({} as Comment);
  const [comments, setComments] = useState<Comment[]>([]); */

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signout,
        /*         setUser,
        users,
        setUsers,
        comment,
        setComment,
        comments,
        setComments, */
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
