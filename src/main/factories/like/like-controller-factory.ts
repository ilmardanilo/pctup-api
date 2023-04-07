import { LikeController } from '../../../application/controllers/like-controller';
import { LikeService } from '../../../domain/like/services/like-service';
import { LikeRepository } from '../../../infra/repositories/like/like-repository';
import { SetupRepository } from '../../../infra/repositories/setup/setup-repository';
import { UserRepository } from '../../../infra/repositories/user/user-repository';

export class LikeControllerFactory {
  static create(): LikeController {
    const likeRepository = new LikeRepository();
    const setupRepository = new SetupRepository();
    const userRepository = new UserRepository();
    const likeService = new LikeService(
      likeRepository,
      setupRepository,
      userRepository,
    );
    return new LikeController(likeService);
  }
}
