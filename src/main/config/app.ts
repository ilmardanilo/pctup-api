import { setupMiddlewares } from './setup-middlewares';
import { setupRoutes } from './setup-routes';
import express from 'express';

export const app = express();
setupMiddlewares(app);
setupRoutes(app);
