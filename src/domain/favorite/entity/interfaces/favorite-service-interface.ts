import { IFavorite, IParamsCreateFavorite } from './favorite-interface';

export interface IFavoriteService {
  addFavorite(params: IParamsCreateFavorite): Promise<IFavorite>;
}
