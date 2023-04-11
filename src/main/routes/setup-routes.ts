import { Router } from 'express';
import { auth, uploadImage } from '../../application/middlewares';
import { SetupControllerFactory } from '../factories/setup/setup-controller-factory';

const setupController = SetupControllerFactory.create();
const setupRouter = Router();

setupRouter.post('/setups', auth, setupController.createSetup);
setupRouter.get('/setups', setupController.getSetups);
setupRouter.delete('/setups/:setupId', auth, setupController.deleteSetup);
setupRouter.put('/setups/:setupId', auth, setupController.updateSetup);
setupRouter.get('/setups/users/:userId', auth, setupController.getSetupsByUserId);
setupRouter.post('/setups/:setupId/images', auth, uploadImage.single('image'), setupController.addImage);
setupRouter.delete('/setups/:setupId/images', auth, setupController.removeImage);

export { setupRouter };
