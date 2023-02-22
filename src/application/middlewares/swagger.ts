import { Application } from 'express';
import * as OpenApiValidator from 'express-openapi-validator';
import { readFileSync } from 'fs';
import path from 'path';
import * as swaggerUI from 'swagger-ui-express';
import * as YAML from 'js-yaml';

const OPEN_API_SPEC_FILE_LOCATION = path.join(
  __dirname,
  '../..',
  'contracts/pctup-api.yaml',
);

export const swaggerDocumentation = (app: Application) => {
  const swaggerDoc = YAML.load(
    readFileSync(OPEN_API_SPEC_FILE_LOCATION.toString(), 'utf8'),
  ) as any;
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
};

export const swaggerValidation = OpenApiValidator.middleware({
  apiSpec: OPEN_API_SPEC_FILE_LOCATION,
  validateRequests: true,
  validateResponses: true,
});
