import { IUser } from '../entity/interfaces/user-interface';

export interface IUserRepository {
  getUserById(userId: string): Promise<IUser | null>;
}
