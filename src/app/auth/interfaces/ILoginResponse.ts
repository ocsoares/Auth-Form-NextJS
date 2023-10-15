import { IUser } from "./IUser";

export interface ILoginResponse extends Partial<IUser> {
  message?: string;
  error?: string;
  statusCode?: number;
}
