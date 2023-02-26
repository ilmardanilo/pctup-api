import { UserController } from '../../../application/controllers/user-controller';
import { UserService } from '../../../domain/user/services/user-service';
import { UserRepository } from '../../../infra/repositories/user/user-repository';

export class UserControllerFactory {
  static create(): UserController {
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    return new UserController(userService);
  }
}
