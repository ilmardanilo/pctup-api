import {
  IFavorite,
  IParamsCreateFavorite,
  IParamsGetFavorite,
} from '../entity/interfaces/favorite-interface';

export interface IFavoriteRepository {
  createFavorite(params: IParamsCreateFavorite): Promise<IFavorite>;
  getFavorite(params: IParamsGetFavorite): Promise<IFavorite | null>;
  removeFavorite(favoriteId: string): Promise<void>;
}
