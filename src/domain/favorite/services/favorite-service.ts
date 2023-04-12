import {
  UnprocessableEntityError,
  NotFoundError,
} from '../../../helpers/errors';
import { ISetupRepository } from '../../setup/repository/setup-repository-interface';
import { IUserRepository } from '../../user/repository/user-repository-interface';
import {
  IFavorite,
  IParamsCreateFavorite,
} from '../entity/interfaces/favorite-interface';
import { IFavoriteService } from '../entity/interfaces/favorite-service-interface';
import { IFavoriteRepository } from '../repository/favorite-repository-interface';

export class FavoriteService implements IFavoriteService {
  constructor(
    private readonly favoriteRepository: IFavoriteRepository,
    private readonly setupRepository: ISetupRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async addFavorite({
    usuarioId,
    setupId,
  }: IParamsCreateFavorite): Promise<IFavorite> {
    const user = await this.userRepository.getUserById(usuarioId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    const favorite = await this.favoriteRepository.getFavorite({
      usuarioId,
      setupId,
    });

    if (favorite) {
      throw new UnprocessableEntityError('O usúario já favoritou esse setup.');
    }

    return await this.favoriteRepository.createFavorite({ usuarioId, setupId });
  }

  async removeFavorite(favoriteId: string): Promise<void> {
    const favorite = await this.favoriteRepository.getFavorite({
      _id: favoriteId,
    });

    if (!favorite) {
      throw new NotFoundError('Favorito não encontrado.');
    }

    await this.favoriteRepository.removeFavorite(favoriteId);
  }

  async getFavoritesByUserId(userId: string): Promise<IFavorite[]> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return await this.favoriteRepository.getFavoritesByUserId(userId);
  }
}
