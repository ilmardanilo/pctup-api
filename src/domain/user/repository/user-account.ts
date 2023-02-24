import { IParamsCreateAccount, IUser } from '../entity/interfaces';

export interface IUserAccountRepository {
  getAccountByEmail(email: string): Promise<IUser | null>;
  createAccount(params: IParamsCreateAccount): Promise<{ id: string }>;
}
