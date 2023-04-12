import { HttpError } from 'express-openapi-validator/dist/framework/types';

export class UnprocessableEntityError extends HttpError {
  constructor(message = 'Unprocessable Entity error') {
    super({
      status: 422,
      path: '',
      name: 'UnprocessableEntityError',
      message,
    });
  }
}
