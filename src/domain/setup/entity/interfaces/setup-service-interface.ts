import { ISetup, IParamsCreateSetup } from './setup-interface';

export interface ISetupService {
  createSetup(params: IParamsCreateSetup): Promise<ISetup>;
  getSetups(): Promise<ISetup[]>;
  getSetupsByUserId(userId: string): Promise<ISetup[]>;
  deleteSetup(setupId: string): Promise<void>;
}
