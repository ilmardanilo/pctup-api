import { IUserService } from '../entity/interfaces/user-service-interface';
import { IUserRepository } from '../repository/user-repository-interface';
import { IUser, IParamsUpdateUser } from '../entity/interfaces/user-interface';
import { BusinessError, NotFoundError } from '../../../helpers/errors';

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getUserById(userId: string): Promise<IUser> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return user;
  }

  async updateUserById(
    userId: string,
    params: IParamsUpdateUser,
  ): Promise<void> {
    if (!Object.keys(params).length) {
      throw new BusinessError(
        'Informe pelo menos um parâmetro para ser atualizado.',
      );
    }

    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    await this.userRepository.updateUserById(userId, params);
  }

  async deleteUserById(userId: string): Promise<void> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    await this.userRepository.deleteUserById(userId);
  }
}
