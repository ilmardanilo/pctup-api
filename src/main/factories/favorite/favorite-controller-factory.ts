import { FavoriteController } from '../../../application/controllers/favorite-controller';
import { FavoriteService } from '../../../domain/favorite/services/favorite-service';
import { FavoriteRepository } from '../../../infra/repositories/favorite/favorite-repository';
import { SetupRepository } from '../../../infra/repositories/setup/setup-repository';
import { UserRepository } from '../../../infra/repositories/user/user-repository';

export class FavoriteControllerFactory {
  static create(): FavoriteController {
    const favoriteRepository = new FavoriteRepository();
    const setupRepository = new SetupRepository();
    const userRepository = new UserRepository();
    const favoriteService = new FavoriteService(
      favoriteRepository,
      setupRepository,
      userRepository,
    );
    return new FavoriteController(favoriteService);
  }
}
