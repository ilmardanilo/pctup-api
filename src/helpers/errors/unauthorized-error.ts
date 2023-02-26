import { HttpError } from 'express-openapi-validator/dist/framework/types';

export class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized!') {
    super({
      status: 401,
      path: '',
      name: 'UnauthorizedError',
      message,
    });
  }
}
