import { Router } from 'express';
import { auth } from '../../application/middlewares/auth-middleware';
import { CommentControllerFactory } from '../factories/comment/comment-controller-factory';

const commentController = CommentControllerFactory.create();
const commentRouter = Router();

commentRouter.post('/comments', auth, commentController.createComment);

export { commentRouter };
