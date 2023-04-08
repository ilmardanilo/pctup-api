import { BusinessError, NotFoundError } from '../../../helpers/errors';
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

    const like = await this.likeRepository.getLikeByUserIdAndSetupId({
      usuarioId,
      setupId,
    });

    if (like) {
      throw new BusinessError('O usúario já curtiu esse setup.');
    }

    return await this.likeRepository.createLike({ usuarioId, setupId });
  }

  async removeLike(likeId: string): Promise<void> {
    const like = await this.likeRepository.getLikeById(likeId);

    if (!like) {
      throw new NotFoundError('Curtida não encontrada.');
    }

    await this.likeRepository.removeLike(likeId);
  }
}
