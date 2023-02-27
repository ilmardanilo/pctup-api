import { Router } from 'express';
import { auth } from '../../application/middlewares/auth-middleware';
import { UserControllerFactory } from '../factories/user/user-controller-factory';

const userController = UserControllerFactory.create();
const userRouter = Router();

userRouter.get('/users/:userId', auth, userController.getUserById);
userRouter.put('/users/:userId', auth, userController.updateUserById);

export { userRouter };
