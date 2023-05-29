import { MSetup } from '../../database/mongo/models/setup-model';
import {
  ISetup,
  IParamsCreateSetup,
  IParamsGetSetups,
  IParamsUpdateSetup,
} from '../../../domain/setup/entity/interfaces/setup-interface';
import { ISetupRepository } from '../../../domain/setup/repository/setup-repository-interface';
import { Types } from 'mongoose';
import { IImage } from '../../../helpers/utils';

export class SetupRepository implements ISetupRepository {
  private readonly setupCollection = MSetup;

  async createSetup(params: IParamsCreateSetup): Promise<ISetup> {
    const result = await this.setupCollection.create(params);

    const setup = result.toObject();

    return setupToDomain(setup);
  }

  async getSetups({ usuarioId }: IParamsGetSetups): Promise<ISetup[]> {
    const setups = await this.setupCollection.aggregate([
      {
        $match: {
          usuarioId: new Types.ObjectId(usuarioId),
        },
      },
      {
        $lookup: {
          from: 'usuario',
          localField: 'usuarioId',
          foreignField: '_id',
          as: 'usuario',
        },
      },
      {
        $unwind: '$usuario',
      },
      {
        $project: {
          'usuario.senha': 0,
        },
      },
    ]);

    return setups.map((setup) => {
      return setupToDomain(setup);
    });
  }

  async getSetupsActivesAndPublics(): Promise<ISetup[]> {
    const setups = await this.setupCollection.aggregate([
      {
        $match: {
          estaAtivo: true,
          estaPublico: true,
        },
      },
      {
        $lookup: {
          from: 'usuario',
          localField: 'usuarioId',
          foreignField: '_id',
          as: 'usuario',
        },
      },
      {
        $unwind: '$usuario',
      },
      {
        $project: {
          'usuario.senha': 0,
        },
      },
    ]);

    return setups && setups.map((setup) => setupToDomain(setup));
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

  async addImage(setupId: string, image: IImage): Promise<void> {
    await this.setupCollection.updateOne(
      { _id: new Types.ObjectId(setupId) },
      {
        $push: {
          imagens: image,
        },
      },
    );
  }
}

const setupToDomain = (setup: any): ISetup => {
  const setupFormated: ISetup = {
    ...setup,
    _id: String(setup._id),
    usuarioId: String(setup.usuarioId),
  };

  const userFormated = {
    ...setup?.usuario,
    _id: String(setup?.usuario?._id),
  };

  if (setup.usuario) {
    setupFormated.usuario = userFormated;
  }

  return setupFormated;
};
