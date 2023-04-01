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
}
