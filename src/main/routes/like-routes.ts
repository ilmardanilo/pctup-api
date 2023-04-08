import { Router } from 'express';
import { auth } from '../../application/middlewares/auth-middleware';
import { LikeControllerFactory } from '../factories/like/like-controller-factory';

const likeController = LikeControllerFactory.create();
const likeRouter = Router();

likeRouter.post('/likes', auth, likeController.addLike);
likeRouter.delete('/likes/:likeId', auth, likeController.removeLike);

export { likeRouter };
