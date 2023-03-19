import { IUser, IParamsUpdateUser } from '../entity/interfaces/user-interface';

export interface IUserRepository {
  getUserById(userId: string): Promise<IUser | null>;
  updateUserById(userId: string, params: IParamsUpdateUser): Promise<void>;
  deleteUserById(userId: string): Promise<void>;
}
