import { IParamsCreateAccount, IResponseCreateAccount } from './user-interface';

export interface IUserAccountService {
  createAccount(params: IParamsCreateAccount): Promise<IResponseCreateAccount>;
}
