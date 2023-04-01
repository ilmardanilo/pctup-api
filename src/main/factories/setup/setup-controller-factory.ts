import { SetupController } from '../../../application/controllers/setup-controller';
import { SetupService } from '../../../domain/setup/services/setup-service';
import { SetupRepository } from '../../../infra/repositories/setup/setup-repository';
import { UserRepository } from '../../../infra/repositories/user/user-repository';

export class SetupControllerFactory {
  static create(): SetupController {
    const setupRepository = new SetupRepository();
    const userRepository = new UserRepository();
    const setupService = new SetupService(setupRepository, userRepository);
    return new SetupController(setupService);
  }
}
