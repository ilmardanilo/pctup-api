import { ISetup, IParamsCreateSetup } from './setup-interface';

export interface ISetupService {
  createSetup(params: IParamsCreateSetup): Promise<ISetup>;
  getSetups(): Promise<ISetup[]>;
}
