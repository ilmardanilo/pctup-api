import {
  ISetup,
  IParamsCreateSetup,
  IParamsUpdateSetup,
  IParamsAddImage,
} from './setup-interface';
import { IImage } from '../../../../helpers/utils';

export interface ISetupService {
  createSetup(params: IParamsCreateSetup): Promise<ISetup>;
  getSetups(): Promise<ISetup[]>;
  getSetupsByUserId(userId: string): Promise<ISetup[]>;
  deleteSetup(setupId: string): Promise<void>;
  updateSetupById(setupId: string, params: IParamsUpdateSetup): Promise<void>;
  addImage(params: IParamsAddImage): Promise<IImage>;
  removeImage(setupId: string, publicId: string): Promise<void>;
}
