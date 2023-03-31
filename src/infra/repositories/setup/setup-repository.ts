import { MSetup } from '../../database/mongo/models/setup-model';
import {
  ISetup,
  IParamsCreateSetup,
} from '../../../domain/setup/entity/interfaces/setup-interface';
import { ISetupRepository } from '../../../domain/setup/repository/setup-repository-interface';

export class SetupRepository implements ISetupRepository {
  private readonly setupCollection = MSetup;

  async createSetup(params: IParamsCreateSetup): Promise<ISetup> {
    const newSetup = (await this.setupCollection.create(
      params,
    )) as unknown as ISetup;

    return newSetup;
  }
}
