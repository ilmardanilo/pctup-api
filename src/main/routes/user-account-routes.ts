import { Router } from 'express';
import { UserAccountControllerFactory } from '../factories/user/user-account-controller-factory';

const userAccountController = UserAccountControllerFactory.create();
const userAccountRouter = Router();

userAccountRouter.post('/signup', userAccountController.createAccount);
userAccountRouter.post('/login', userAccountController.authenticate);

export { userAccountRouter };
