import {
  IParamsCreateAccount,
  IResponseCreateAndAuthenticateAccount,
} from './user-interface';

export interface IUserAccountService {
  createAccount(
    params: IParamsCreateAccount,
  ): Promise<IResponseCreateAndAuthenticateAccount>;
  authenticate(
    email: string,
    password: string,
  ): Promise<IResponseCreateAndAuthenticateAccount>;
}
