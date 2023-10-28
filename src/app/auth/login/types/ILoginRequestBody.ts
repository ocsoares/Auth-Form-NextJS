export interface ILoginRequestBody {
  readonly email: string;
  readonly password: string;
  readonly remember: boolean;
}
