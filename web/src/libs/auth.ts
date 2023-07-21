import { cookies } from 'next/headers'
import decode from 'jwt-decode'

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

export function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = decode(token)

  return user
}