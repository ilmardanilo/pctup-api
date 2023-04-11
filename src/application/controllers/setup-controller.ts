import { ISetupService } from '../../domain/setup/entity/interfaces/setup-service-interface';
import { handleError } from '../../helpers/utils';
import {
  IParamsCreateSetup,
  IParamsUpdateSetup,
} from '../../domain/setup/entity/interfaces/setup-interface';

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

  deleteSetup = async (
    req: Request<{ setupId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { setupId } = req.params;

      await this.setupService.deleteSetup(setupId);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };

  getSetupsByUserId = async (
    req: Request<{ userId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { userId } = req.params;

      const result = await this.setupService.getSetupsByUserId(userId);

      res.status(200).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };

  updateSetup = async (
    req: Request<{ setupId: string }, {}, IParamsUpdateSetup, {}>,
    res: Response,
  ) => {
    try {
      const { setupId } = req.params;

      const { ...params } = req.body;

      await this.setupService.updateSetupById(setupId, params);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };

  addImage = async (
    req: Request<{ setupId: string }, {}, {}, {}>,
    res: Response,
  ) => {
    try {
      const { setupId } = req.params;

      const image = req.file;

      if (!image) {
        return res.status(400).json({ message: 'O campo image é obrigatório' });
      }

      const result = await this.setupService.addImage({
        setupId,
        file: {
          path: image.path,
          mimeType: image.mimetype,
        },
      });

      res.status(200).json(result);
    } catch (error) {
      handleError(res, error);
    }
  };

  removeImage = async (
    req: Request<{ setupId: string }, {}, {}, { publicId: string }>,
    res: Response,
  ) => {
    try {
      const { setupId } = req.params;

      const { publicId } = req.query;

      await this.setupService.removeImage(setupId, publicId);

      res.status(204).json();
    } catch (error) {
      handleError(res, error);
    }
  };
}
