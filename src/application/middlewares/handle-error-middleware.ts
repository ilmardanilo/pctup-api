/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Application, NextFunction, Request, Response } from 'express';
import { HttpError } from 'express-openapi-validator/dist/framework/types';
import { Logger } from 'traceability';

export const middlewareHandleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  }

  if (err instanceof Error) {
    Logger.error(
      JSON.stringify({
        eventName: 'server.error',
        message: err.message,
        stack: err.stack,
      }),
    );
  }

  return res.status(500).json({ message: 'Unexpected error!' });
};

export const handleError = (app: Application) => {
  app.use(middlewareHandleError);
};
