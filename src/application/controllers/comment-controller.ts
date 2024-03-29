import { ICommentService } from '../../domain/comment/entity/interfaces/comment-service-interface';
import { handleError } from '../../helpers/utils';
import {
  IParamsCreateComment,
  IParamsUpdateComment,
} from '../../domain/comment/entity/interfaces/comment-interface';

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

  updateComment = async (
    req: Request<{ commentId: string }, {}, IParamsUpdateComment, {}>,
    res: Response,
  ) => {
    try {
      const { commentId } = req.params;

      const { ...params } = req.body;

      await this.commentService.updateComment(commentId, params);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };

  deleteComment = async (
    req: Request<{ commentId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { commentId } = req.params;

      await this.commentService.deleteComment(commentId);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };

  getCommentsBySetupId = async (
    req: Request<{ setupId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { setupId } = req.params;

      const result = await this.commentService.getCommentsBySetupId(setupId);

      res.status(200).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };
}
