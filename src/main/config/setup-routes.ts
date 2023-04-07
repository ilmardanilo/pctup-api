import { Express } from 'express';
import {
  userAccountRouter,
  userRouter,
  setupRouter,
  commentRouter,
  likeRouter,
  favoriteRouter,
} from '../routes';

export const setupRoutes = (app: Express): void => {
  app.use('/api/v1', userAccountRouter);
  app.use('/api/v1', userRouter);
  app.use('/api/v1', setupRouter);
  app.use('/api/v1', setupRouter);
  app.use('/api/v1', commentRouter);
  app.use('/api/v1', likeRouter);
  app.use('/api/v1', favoriteRouter);
};
