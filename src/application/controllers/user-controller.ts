import { IUserService } from '../../domain/user/entity/interfaces/user-service-interface';
import { handleError } from '../../helpers/utils';
import { IParamsUpdateUser } from '../../domain/user/entity/interfaces/user-interface';

import { Request, Response } from 'express';

export class UserController {
  constructor(private readonly userService: IUserService) {}

  getUserById = async (
    req: Request<{ userId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { userId } = req.params;

      const result = await this.userService.getUserById(userId);

      res.status(200).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };

  updateUserById = async (
    req: Request<{ userId: string }, {}, IParamsUpdateUser, {}>,
    res: Response,
  ) => {
    try {
      const { userId } = req.params;

      await this.userService.updateUserById(
        userId,
        req.body as IParamsUpdateUser,
      );

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };

  deleteUserById = async (
    req: Request<{ userId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { userId } = req.params;

      await this.userService.deleteUserById(userId);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };
}
