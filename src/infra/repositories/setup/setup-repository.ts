import { MSetup } from '../../database/mongo/models/setup-model';
import {
  ISetup,
  IParamsCreateSetup,
  IParamsGetSetups,
  IParamsUpdateSetup,
} from '../../../domain/setup/entity/interfaces/setup-interface';
import { ISetupRepository } from '../../../domain/setup/repository/setup-repository-interface';
import { Types } from 'mongoose';

export class SetupRepository implements ISetupRepository {
  private readonly setupCollection = MSetup;

  async createSetup(params: IParamsCreateSetup): Promise<ISetup> {
    const result = await this.setupCollection.create(params);

    const setup = result.toObject();

    return setupToDomain(setup);
  }

  async getSetups(params: IParamsGetSetups): Promise<ISetup[]> {
    const setups = (await this.setupCollection
      .find(params)
      .lean()) as unknown as ISetup[];

    return setups.map((setup) => {
      return setupToDomain(setup);
    });
  }

  async getSetupById(setupId: string): Promise<ISetup | null> {
    const setup = (await this.setupCollection
      .findOne({ _id: new Types.ObjectId(setupId) })
      .lean()) as unknown as ISetup;

    return setup && setupToDomain(setup);
  }

  async deleteSetup(setupId: string): Promise<void> {
    await this.setupCollection.deleteOne({ _id: new Types.ObjectId(setupId) });
  }

  async updateSetupById(
    setupId: string,
    params: IParamsUpdateSetup,
  ): Promise<void> {
    await this.setupCollection.updateOne(
      { _id: new Types.ObjectId(setupId) },
      {
        $set: {
          ...params,
          updatedAt: new Date(),
        },
      },
    );
  }
}

const setupToDomain = (setup: any): ISetup => {
  return {
    ...setup,
    _id: String(setup._id),
    usuarioId: String(setup.usuarioId),
  };
};
