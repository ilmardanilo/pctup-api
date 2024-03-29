import { Router } from 'express';
import { auth } from '../../application/middlewares/auth-middleware';
import { FavoriteControllerFactory } from '../factories/favorite/favorite-controller-factory';

const favoriteController = FavoriteControllerFactory.create();
const favoriteRouter = Router();

favoriteRouter.post('/favorites', auth, favoriteController.addFavorite);
favoriteRouter.delete('/favorites/:favoriteId', auth, favoriteController.removeFavorite);
favoriteRouter.get('/favorites/users/:userId', auth, favoriteController.getFavoritesByUserId);

export { favoriteRouter };
