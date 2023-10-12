import { IUser } from "./IUser";

export interface ISignUpResponse {
  data?: IUser;
  message?: string;
  error?: string;
  statusCode?: number;
}
