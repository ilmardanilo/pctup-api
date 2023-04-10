/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { HttpError } from 'express-openapi-validator/dist/framework/types';
import { Logger } from 'traceability';

export const handleError = (res: Response, error: any) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof Error) {
    Logger.error(
      JSON.stringify({
        eventName: 'server.error',
        message: error.message,
        stack: error.stack,
      }),
    );
  }

  return res.status(500).json({ message: 'Unexpected error!' });
};

export const hasTypeImageAllowed = (mimeType: string): boolean => {
  const allowedImageTypes = ['png', 'jpg', 'jpeg'];

  const typeImage = mimeType.split('/')[1];

  return allowedImageTypes.some((allowedType) => {
    return allowedType === typeImage;
  });
};
