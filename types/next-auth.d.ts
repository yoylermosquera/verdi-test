import { UserLoginResponse } from "@/services/user"
import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    user: UserLoginResponse & {
        token: string;
    }
  }

  interface Jwt {
    accessToken: string;
    user: UserLoginResponse & {
        token: string;
    }
  }
}