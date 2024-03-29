import { MUser } from '../../database/mongo/models/user-model';
import {
  IParamsCreateAccount,
  IUser,
} from '../../../domain/user/entity/interfaces/user-interface';
import { IUserAccountRepository } from '../../../domain/user/repository/user-account-repository-interface';

export class UserAccountRepository implements IUserAccountRepository {
  private readonly userCollection = MUser;

  async getAccountByEmail(email: string): Promise<IUser | null> {
    const account = await this.userCollection.findOne({ email }).lean();

    return account as unknown as IUser;
  }

  async createAccount({
    name,
    email,
    password,
  }: IParamsCreateAccount): Promise<{ id: string }> {
    const newAccount = (await this.userCollection.create({
      nome: name,
      email,
      senha: password,
    })) as unknown as IUser;

    return { id: newAccount._id.toString() };
  }
}
