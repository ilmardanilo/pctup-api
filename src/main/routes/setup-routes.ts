import { Router } from 'express';
import { auth } from '../../application/middlewares/auth-middleware';
import { SetupControllerFactory } from '../factories/setup/setup-controller-factory';

const setupController = SetupControllerFactory.create();
const setupRouter = Router();

setupRouter.post('/setups', auth, setupController.createSetup);
setupRouter.get('/setups', setupController.getSetups);
setupRouter.delete('/setups/:setupId', auth, setupController.deleteSetup);
setupRouter.get(
  '/setups/users/:userId',
  auth,
  setupController.getSetupsByUserId,
);

export { setupRouter };
