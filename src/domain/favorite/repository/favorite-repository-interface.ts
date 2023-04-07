import {
  IFavorite,
  IParamsCreateFavorite,
} from '../entity/interfaces/favorite-interface';

export interface IFavoriteRepository {
  createFavorite(params: IParamsCreateFavorite): Promise<IFavorite>;
}
