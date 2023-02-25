import { IUserAccountService } from '../../domain/user/entity/interfaces/user-account-service-interface';
import { IParamsCreateAccount } from '../../domain/user/entity/interfaces/user-interface';
import { handleError } from '../../helpers/utils';

import { Request, Response } from 'express';

export class UserAccountController {
  constructor(private readonly userAccountService: IUserAccountService) {}

  createAccount = async (
    req: Request<{}, {}, IParamsCreateAccount, {}>,
    res: Response,
  ) => {
    try {
      const { name, email, password } = req.body;

      const result = await this.userAccountService.createAccount({
        name,
        email,
        password,
      });

      res.status(201).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };
}
