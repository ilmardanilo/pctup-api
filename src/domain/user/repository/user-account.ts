import { IUser } from '../entity/interfaces';

export interface IUserAccountRepository {
  getAccountByEmail(email: string): Promise<IUser | null>;
}
