import { CommentController } from '../../../application/controllers/comment-controller';
import { CommentService } from '../../../domain/comment/services/comment-service';
import { CommentRepository } from '../../../infra/repositories/comment/comment-repository';
import { SetupRepository } from '../../../infra/repositories/setup/setup-repository';
import { UserRepository } from '../../../infra/repositories/user/user-repository';

export class CommentControllerFactory {
  static create(): CommentController {
    const commentRepository = new CommentRepository();
    const setupRepository = new SetupRepository();
    const userRepository = new UserRepository();
    const commentService = new CommentService(
      commentRepository,
      setupRepository,
      userRepository,
    );
    return new CommentController(commentService);
  }
}
