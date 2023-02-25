import { HttpError } from 'express-openapi-validator/dist/framework/types';

export class ForbiddenError extends HttpError {
  constructor(message = 'Access denied!') {
    super({
      status: 403,
      path: '',
      name: 'ForbiddenError',
      message,
    });
  }
}
