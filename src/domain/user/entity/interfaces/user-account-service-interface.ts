import { IParamsCreateAccount, IResponseCreateAccount } from './user-interface';

export interface IUserAccountService {
  createAccount(params: IParamsCreateAccount): Promise<IResponseCreateAccount>;
  authenticate(
    email: string,
    password: string,
  ): Promise<{ name: string; accessToken: string }>;
}
