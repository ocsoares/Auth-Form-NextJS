import { IUser } from "../interfaces/IUser";

declare module "next-auth" {
  interface Session {
    user: {
      user: IUser;
      jwt: string;
    };
  }
}
