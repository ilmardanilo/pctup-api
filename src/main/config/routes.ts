import { Express } from 'express';
import { userRouter } from '../routes';

export const setupRoutes = (app: Express): void => {
  app.use('/api', userRouter);
};
