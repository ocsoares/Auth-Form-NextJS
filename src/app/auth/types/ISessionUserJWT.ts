import { JWT } from "next-auth/jwt";

export interface ISessionUserJWT extends JWT {
  firstName: string;
  lastName: string;
  email: string;
  jwt: string;
}
