import { IUserService } from '../../domain/user/entity/interfaces/user-service-interface';
import { handleError } from '../../helpers/utils';

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
}
