import { Express } from 'express';
import { userAccountRouter, userRouter, setupRouter } from '../routes';

export const setupRoutes = (app: Express): void => {
  app.use('/api/v1', userAccountRouter);
  app.use('/api/v1', userRouter);
  app.use('/api/v1', setupRouter);
};
