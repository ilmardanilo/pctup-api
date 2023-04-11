import { SetupController } from '../../../application/controllers/setup-controller';
import { SetupService } from '../../../domain/setup/services/setup-service';
import { CloudinaryExternalService } from '../../../infra/external/cloudinary-service';
import { SetupRepository } from '../../../infra/repositories/setup/setup-repository';
import { UserRepository } from '../../../infra/repositories/user/user-repository';

export class SetupControllerFactory {
  static create(): SetupController {
    const setupRepository = new SetupRepository();
    const userRepository = new UserRepository();
    const cloudinaryService = new CloudinaryExternalService();
    const setupService = new SetupService(
      setupRepository,
      userRepository,
      cloudinaryService,
    );
    return new SetupController(setupService);
  }
}
