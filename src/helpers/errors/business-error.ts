import { HttpError } from 'express-openapi-validator/dist/framework/types';

export class BusinessError extends HttpError {
  constructor(message = 'Business error') {
    super({
      status: 422,
      path: '',
      name: 'BusinessError',
      message,
    });
  }
}
