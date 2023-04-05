import { ICommentService } from '../../domain/comment/entity/interfaces/comment-service-interface';
import { handleError } from '../../helpers/utils';
import { IParamsCreateComment } from '../../domain/comment/entity/interfaces/comment-interface';

import { Request, Response } from 'express';

export class CommentController {
  constructor(private readonly commentService: ICommentService) {}

  createComment = async (
    req: Request<{}, {}, IParamsCreateComment, {}>,
    res: Response,
  ) => {
    try {
      const { ...params } = req.body;

      const result = await this.commentService.createComment(params);

      res.status(201).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };
}
