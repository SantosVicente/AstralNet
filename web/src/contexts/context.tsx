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

interface ContextProps {
  data: User;
  setData: Dispatch<SetStateAction<User>>;
}

const GlobalContext = createContext<ContextProps>({
  data: {} as User,
  setData: (): void => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<User>({} as User);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);