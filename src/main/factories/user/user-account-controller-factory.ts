import { UserAccountController } from '../../../application/controllers/user-account-controller';
import { UserAccountService } from '../../../domain/user/services/user-account-service';
import { UserAccountRepository } from '../../../infra/repositories/user/user-account-repository';

export class UserAccountControllerFactory {
  static create(): UserAccountController {
    const userAccountRepository = new UserAccountRepository();
    const userAccountService = new UserAccountService(userAccountRepository);
    return new UserAccountController(userAccountService);
  }
}
