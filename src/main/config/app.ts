import { setupMiddlewares } from './middlewares';
import { setupRoutes } from './routes';
import express from 'express';

export const app = express();
setupMiddlewares(app);
setupRoutes(app);
