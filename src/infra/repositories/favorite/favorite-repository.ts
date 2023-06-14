import { MFavorite } from '../../database/mongo/models/favorite-model';
import { IFavoriteRepository } from '../../../domain/favorite/repository/favorite-repository-interface';
import {
  IFavorite,
  IParamsCreateFavorite,
  IParamsGetFavorite,
} from '../../../domain/favorite/entity/interfaces/favorite-interface';
import { Types } from 'mongoose';

export class FavoriteRepository implements IFavoriteRepository {
  private readonly favoriteCollection = MFavorite;

  async createFavorite(params: IParamsCreateFavorite): Promise<IFavorite> {
    const result = await this.favoriteCollection.create(params);

    const favorite = result.toObject();

    return favoriteToDomain(favorite);
  }

  async getFavorite(params: IParamsGetFavorite): Promise<IFavorite | null> {
    const favorite = await this.favoriteCollection.findOne(params).lean();

    return favorite && favoriteToDomain(favorite);
  }

  async removeFavorite(favoriteId: string): Promise<void> {
    await this.favoriteCollection.deleteOne({
      _id: new Types.ObjectId(favoriteId),
    });
  }

  async getFavoritesByUserId(userId: string): Promise<IFavorite[]> {
    const favorites = await this.favoriteCollection.aggregate([
      {
        $match: {
          usuarioId: new Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'setup',
          localField: 'setupId',
          foreignField: '_id',
          as: 'setup',
        },
      },
      {
        $unwind: '$setup',
      },
      {
        $lookup: {
          from: 'usuario',
          localField: 'setup.usuarioId',
          foreignField: '_id',
          as: 'usuario',
        },
      },
      {
        $unwind: '$usuario',
      },
      {
        $project: {
          'usuario.senha': 0,
        },
      },
      {
        $addFields: {
          'setup.usuario': '$usuario',
        },
      },
      {
        $project: {
          usuario: 0,
        },
      },
    ]);

    return favorites && favorites.map((favorite) => favoriteToDomain(favorite));
  }
}

const favoriteToDomain = (favorite: any): IFavorite => {
  return {
    ...favorite,
    _id: favorite._id.toString(),
    usuarioId: favorite.usuarioId.toString(),
    setupId: favorite.setupId.toString(),
    setup: {
      ...favorite?.setup,
      _id: favorite?.setup?._id.toString(),
      usuarioId: favorite?.setup?.usuarioId.toString(),
      usuario: {
        ...favorite?.setup?.usuario,
        _id: favorite?.setup?.usuario?._id.toString(),
      },
    },
  };
};
