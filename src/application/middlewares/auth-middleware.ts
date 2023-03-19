import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { ForbiddenError, UnauthorizedError } from '../../helpers/errors';
import { handleError } from '../../helpers/utils';
import { PRIVATE_KEY } from '../../main/config/env-constants';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new UnauthorizedError('Authorization field is missing.');
    }

    const { id } = verifyToken(token);

    verifyUserId(req, id);

    req.locals = { userId: id };

    next();
  } catch (error) {
    handleError(res, error);
  }
};

const verifyToken = (token: string): { id: string } => {
  try {
    const tokenDecoded = verify(token, PRIVATE_KEY) as JwtPayload;

    return { id: tokenDecoded.id };
  } catch (error: any) {
    if (error?.message === 'jwt expired') {
      throw new UnauthorizedError('Expired token!');
    }
    throw new UnauthorizedError('Invalid token! Please login again.');
  }
};

const verifyUserId = (req: Request, idDecoded: string): void => {
  const { userId } = req.params;

  if (userId && userId !== idDecoded) {
    throw new ForbiddenError();
  }
};
