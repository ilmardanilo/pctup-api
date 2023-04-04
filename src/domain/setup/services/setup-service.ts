import { ISetupService } from '../entity/interfaces/setup-service-interface';
import { ISetupRepository } from '../repository/setup-repository-interface';
import { NotFoundError } from '../../../helpers/errors';
import {
  IParamsCreateSetup,
  ISetup,
} from '../entity/interfaces/setup-interface';
import { IUserRepository } from '../../user/repository/user-repository-interface';

export class SetupService implements ISetupService {
  constructor(
    private readonly setupRepository: ISetupRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async createSetup(params: IParamsCreateSetup): Promise<ISetup> {
    const { usuarioId } = params;

    const user = await this.userRepository.getUserById(usuarioId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return this.setupRepository.createSetup(params);
  }

  async getSetups(): Promise<ISetup[]> {
    return await this.setupRepository.getSetups({
      estaAtivo: true,
      estaPublico: true,
    });
  }

  async getSetupsByUserId(userId: string): Promise<ISetup[]> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }
    return await this.setupRepository.getSetups({ usuarioId: userId });
  }

  async deleteSetup(setupId: string): Promise<void> {
    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    await this.setupRepository.deleteSetup(setupId);
  }
}
