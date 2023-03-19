import { IUser, IParamsUpdateUser } from './user-interface';

export interface IUserService {
  getUserById(userId: string): Promise<IUser>;
  updateUserById(userId: string, params: IParamsUpdateUser): Promise<void>;
  deleteUserById(userId: string): Promise<void>;
}
