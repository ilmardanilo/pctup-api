import { HttpError } from 'express-openapi-validator/dist/framework/types';

export class NotFoundError extends HttpError {
  constructor(message = 'Not found!') {
    super({
      status: 404,
      path: '',
      name: 'NotFoundError',
      message,
    });
  }
}
