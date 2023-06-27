import {
  UnprocessableEntityError,
  NotFoundError,
} from '../../../helpers/errors';
import { ISetupRepository } from '../../setup/repository/setup-repository-interface';
import { IUserRepository } from '../../user/repository/user-repository-interface';
import { ILike, IParamsCreateLike } from '../entity/interfaces/like-interface';
import { ILikeService } from '../entity/interfaces/like-service-interface';
import { ILikeRepository } from '../repository/like-repository-interface';

export class LikeService implements ILikeService {
  constructor(
    private readonly likeRepository: ILikeRepository,
    private readonly setupRepository: ISetupRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async addLike({ usuarioId, setupId }: IParamsCreateLike): Promise<ILike> {
    const user = await this.userRepository.getUserById(usuarioId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    const like = await this.likeRepository.getLike({
      usuarioId,
      setupId,
    });

    if (like) {
      throw new UnprocessableEntityError('O usúario já curtiu esse setup.');
    }

    return await this.likeRepository.createLike({ usuarioId, setupId });
  }

  async removeLike(likeId: string): Promise<void> {
    const like = await this.likeRepository.getLike({ _id: likeId });

    if (!like) {
      throw new NotFoundError('Curtida não encontrada.');
    }

    await this.likeRepository.removeLike(likeId);
  }

  async getLikesByUserId(userId: string): Promise<ILike[]> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return await this.likeRepository.getLikesByUserId(userId);
  }

  async countLikes(setupId: string): Promise<number> {
    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    return await this.likeRepository.countLikes(setupId);
  }
}
