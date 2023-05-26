import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { loginUser } from '@/services/user';
import { handleRequestError } from '../../../util/error';


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: any) {
        try {
          const { email = '', password = '' } = credentials as {
            email: string;
            password: string;
          };
          const { data, headers } = await loginUser({ email, password });
          const user = data?.data?.user;

          const token = headers['authorization'] || '';

          if (!user || !token) return null;

          return {
            ...user,
            token,
          };
        } catch (error) {
          throw new Error(handleRequestError(error));
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return {
        ...token,
        ...user,
      };
    },
    session({ session, token }) {
      session.user = token as any;
      session.accessToken = (token?.token as any) || '';
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);

