import { MFavorite } from '../../database/mongo/models/favorite-model';
import { IFavoriteRepository } from '../../../domain/favorite/repository/favorite-repository-interface';
import {
  IFavorite,
  IParamsCreateFavorite,
} from '../../../domain/favorite/entity/interfaces/favorite-interface';

export class FavoriteRepository implements IFavoriteRepository {
  private readonly favoriteCollection = MFavorite;

  async createFavorite(params: IParamsCreateFavorite): Promise<IFavorite> {
    const result = await this.favoriteCollection.create(params);

    const favorite = result.toObject();

    return {
      ...favorite,
      _id: favorite._id.toString(),
      usuarioId: favorite.usuarioId.toString(),
      setupId: favorite.setupId.toString(),
    } as unknown as IFavorite;
  }
}
