import {
  IParamsCreateAccount,
  IUser,
} from '../entity/interfaces/user-interface';

export interface IUserAccountRepository {
  getAccountByEmail(email: string): Promise<IUser | null>;
  createAccount(params: IParamsCreateAccount): Promise<{ id: string }>;
}
