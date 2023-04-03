import {
  ISetup,
  IParamsCreateSetup,
} from '../entity/interfaces/setup-interface';

export interface ISetupRepository {
  createSetup(params: IParamsCreateSetup): Promise<ISetup>;
  getSetups(): Promise<ISetup[]>;
}
