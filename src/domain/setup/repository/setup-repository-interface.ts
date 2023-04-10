import {
  ISetup,
  IParamsCreateSetup,
  IParamsGetSetups,
  IParamsUpdateSetup,
  IImage,
} from '../entity/interfaces/setup-interface';

export interface ISetupRepository {
  createSetup(params: IParamsCreateSetup): Promise<ISetup>;
  getSetups(params: IParamsGetSetups): Promise<ISetup[]>;
  getSetupById(setupId: string): Promise<ISetup | null>;
  deleteSetup(setupId: string): Promise<void>;
  updateSetupById(setupId: string, params: IParamsUpdateSetup): Promise<void>;
  addImage(setupId: string, image: IImage): Promise<void>;
}
