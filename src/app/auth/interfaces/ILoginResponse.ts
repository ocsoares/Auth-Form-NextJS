import { IUser } from "./IUser";

export interface ILoginResponse {
  data?: {
    user: IUser;
    jwt: string;
  };
  message?: string;
  error?: string;
  statusCode?: number;
}
