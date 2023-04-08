import { IFavorite, IParamsCreateFavorite } from './favorite-interface';

export interface IFavoriteService {
  addFavorite(params: IParamsCreateFavorite): Promise<IFavorite>;
  removeFavorite(favoriteId: string): Promise<void>;
}
