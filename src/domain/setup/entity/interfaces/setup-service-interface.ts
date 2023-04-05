import {
  ISetup,
  IParamsCreateSetup,
  IParamsUpdateSetup,
} from './setup-interface';

export interface ISetupService {
  createSetup(params: IParamsCreateSetup): Promise<ISetup>;
  getSetups(): Promise<ISetup[]>;
  getSetupsByUserId(userId: string): Promise<ISetup[]>;
  deleteSetup(setupId: string): Promise<void>;
  updateSetupById(setupId: string, params: IParamsUpdateSetup): Promise<void>;
}
