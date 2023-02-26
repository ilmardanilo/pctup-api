import { IUser } from './user-interface';

export interface IUserService {
  getUserById(userId: string): Promise<IUser>;
}
