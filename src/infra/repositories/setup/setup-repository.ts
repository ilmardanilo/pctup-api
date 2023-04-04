import { MSetup } from '../../database/mongo/models/setup-model';
import {
  ISetup,
  IParamsCreateSetup,
} from '../../../domain/setup/entity/interfaces/setup-interface';
import { ISetupRepository } from '../../../domain/setup/repository/setup-repository-interface';
import { Types } from 'mongoose';

export class SetupRepository implements ISetupRepository {
  private readonly setupCollection = MSetup;

  async createSetup(params: IParamsCreateSetup): Promise<ISetup> {
    const result = await this.setupCollection.create(params);

    const setup = result.toObject();

    return {
      ...setup,
      _id: setup._id.toString(),
      usuarioId: setup.usuarioId.toString(),
    } as unknown as ISetup;
  }

  async getSetups(): Promise<ISetup[]> {
    const setups = (await this.setupCollection
      .find({
        estaAtivo: true,
        estaPublico: true,
      })
      .lean()) as unknown as ISetup[];

    return setups.map((setup) => ({
      ...setup,
      _id: String(setup._id),
      usuarioId: String(setup.usuarioId),
    }));
  }

  async getSetupById(setupId: string): Promise<ISetup | null> {
    const setup = (await this.setupCollection
      .findOne({ _id: new Types.ObjectId(setupId) })
      .lean()) as unknown as ISetup;

    return (
      setup && {
        ...setup,
        _id: String(setup._id),
        usuarioId: String(setup.usuarioId),
      }
    );
  }

  async deleteSetup(setupId: string): Promise<void> {
    await this.setupCollection.deleteOne({ _id: new Types.ObjectId(setupId) });
  }
}
