import { MFavorite } from '../../database/mongo/models/favorite-model';
import { IFavoriteRepository } from '../../../domain/favorite/repository/favorite-repository-interface';
import {
  IFavorite,
  IParamsCreateFavorite,
  IParamsGetFavoriteByUserIdAndSetupId,
} from '../../../domain/favorite/entity/interfaces/favorite-interface';
import { Types } from 'mongoose';

export class FavoriteRepository implements IFavoriteRepository {
  private readonly favoriteCollection = MFavorite;

  async createFavorite(params: IParamsCreateFavorite): Promise<IFavorite> {
    const result = await this.favoriteCollection.create(params);

    const favorite = result.toObject();

    return favoriteToDomain(favorite);
  }

  async getFavoriteByUserIdAndSetupId({
    usuarioId,
    setupId,
  }: IParamsGetFavoriteByUserIdAndSetupId): Promise<IFavorite | null> {
    const favorite = await this.favoriteCollection
      .findOne({
        usuarioId: new Types.ObjectId(usuarioId),
        setupId: new Types.ObjectId(setupId),
      })
      .lean();

    return favorite && favoriteToDomain(favorite);
  }
}

const favoriteToDomain = (favorite: any): IFavorite => {
  return {
    ...favorite,
    _id: favorite._id.toString(),
    usuarioId: favorite.usuarioId.toString(),
    setupId: favorite.setupId.toString(),
  };
};
