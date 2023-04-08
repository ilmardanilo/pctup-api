import { IFavoriteService } from '../../domain/favorite/entity/interfaces/favorite-service-interface';
import { handleError } from '../../helpers/utils';
import { IParamsCreateFavorite } from '../../domain/favorite/entity/interfaces/favorite-interface';

import { Request, Response } from 'express';

export class FavoriteController {
  constructor(private readonly favoriteService: IFavoriteService) {}

  addFavorite = async (
    req: Request<{}, {}, IParamsCreateFavorite, {}>,
    res: Response,
  ) => {
    try {
      const { ...params } = req.body;

      const result = await this.favoriteService.addFavorite(params);

      res.status(201).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };

  removeFavorite = async (
    req: Request<{ favoriteId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { favoriteId } = req.params;

      await this.favoriteService.removeFavorite(favoriteId);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };

  getFavoritesByUserId = async (
    req: Request<{ userId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { userId } = req.params;

      const result = await this.favoriteService.getFavoritesByUserId(userId);

      res.status(200).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };
}
