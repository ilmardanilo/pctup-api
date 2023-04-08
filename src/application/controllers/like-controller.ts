import { ILikeService } from '../../domain/like/entity/interfaces/like-service-interface';
import { handleError } from '../../helpers/utils';
import { IParamsCreateLike } from '../../domain/like/entity/interfaces/like-interface';

import { Request, Response } from 'express';

export class LikeController {
  constructor(private readonly likeService: ILikeService) {}

  addLike = async (
    req: Request<{}, {}, IParamsCreateLike, {}>,
    res: Response,
  ) => {
    try {
      const { ...params } = req.body;

      const result = await this.likeService.addLike(params);

      res.status(201).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };

  removeLike = async (
    req: Request<{ likeId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { likeId } = req.params;

      await this.likeService.removeLike(likeId);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };
}
