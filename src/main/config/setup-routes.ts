import { Express } from 'express';
import { userAccountRouter, userRouter } from '../routes';

export const setupRoutes = (app: Express): void => {
  app.use('/api/v1', userAccountRouter);
  app.use('/api/v1', userRouter);
};
