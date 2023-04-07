import {
  IFavorite,
  IParamsCreateFavorite,
  IParamsGetFavoriteByUserIdAndSetupId,
} from '../entity/interfaces/favorite-interface';

export interface IFavoriteRepository {
  createFavorite(params: IParamsCreateFavorite): Promise<IFavorite>;
  getFavoriteByUserIdAndSetupId(
    params: IParamsGetFavoriteByUserIdAndSetupId,
  ): Promise<IFavorite | null>;
}
