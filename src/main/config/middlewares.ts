import { Express, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {
  swaggerDocumentation,
  swaggerValidation,
} from '../../application/middlewares';

export const setupMiddlewares = (app: Express): void => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors());
  app.use(swaggerValidation);

  swaggerDocumentation(app);
};
