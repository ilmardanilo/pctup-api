import { IUserService } from '../entity/interfaces/user-service-interface';
import { IUserRepository } from '../repository/user-repository-interface';
import { IUser } from '../entity/interfaces/user-interface';
import { NotFoundError } from '../../../helpers/errors';

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getUserById(userId: string): Promise<IUser> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return user;
  }
}
