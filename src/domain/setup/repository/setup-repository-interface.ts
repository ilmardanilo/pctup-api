import {
  ISetup,
  IParamsCreateSetup,
  IParamsGetSetups,
  IParamsUpdateSetup,
} from '../entity/interfaces/setup-interface';
import { IImage } from '../../../helpers/utils';

export interface ISetupRepository {
  createSetup(params: IParamsCreateSetup): Promise<ISetup>;
  getSetups(params: IParamsGetSetups): Promise<ISetup[]>;
  getSetupById(setupId: string): Promise<ISetup | null>;
  deleteSetup(setupId: string): Promise<void>;
  updateSetupById(setupId: string, params: IParamsUpdateSetup): Promise<void>;
  addImage(setupId: string, image: IImage): Promise<void>;
}
