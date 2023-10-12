export interface ISignUpResponse {
  data?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  message?: string;
  error?: string;
  statusCode?: number;
}
