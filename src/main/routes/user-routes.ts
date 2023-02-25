import { Router } from 'express';
import { UserAccountControllerFactory } from '../factories/user/user-account-controller-factory';

const userAccountController = UserAccountControllerFactory.create();
const userRouter = Router();

userRouter.post('/signup', userAccountController.createAccount);
userRouter.post('/login', userAccountController.authenticate);

export { userRouter };
