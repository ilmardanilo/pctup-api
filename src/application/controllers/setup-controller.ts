import { ISetupService } from '../../domain/setup/entity/interfaces/setup-service-interface';
import { handleError } from '../../helpers/utils';
import { IParamsCreateSetup } from '../../domain/setup/entity/interfaces/setup-interface';

import { Request, Response } from 'express';

export class SetupController {
  constructor(private readonly setupService: ISetupService) {}

  createSetup = async (
    req: Request<{}, {}, IParamsCreateSetup, {}>,
    res: Response,
  ) => {
    try {
      const { ...params } = req.body;

      const result = await this.setupService.createSetup(params);

      res.status(201).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };

  getSetups = async (req: Request, res: Response) => {
    try {
      const result = await this.setupService.getSetups();

      res.status(200).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };
}
