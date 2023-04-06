import { NotFoundError } from '../../../helpers/errors';
import { ISetupRepository } from '../../setup/repository/setup-repository-interface';
import { IUserRepository } from '../../user/repository/user-repository-interface';
import {
  IComment,
  IParamsCreateComment,
  IParamsUpdateComment,
} from '../entity/interfaces/comment-interface';
import { ICommentService } from '../entity/interfaces/comment-service-interface';
import { ICommentRepository } from '../repository/comment-repository-interface';

export class CommentService implements ICommentService {
  constructor(
    private readonly commentRepository: ICommentRepository,
    private readonly setupRepository: ISetupRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async createComment(params: IParamsCreateComment): Promise<IComment> {
    const { usuarioId, setupId } = params;

    const user = await this.userRepository.getUserById(usuarioId);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    const setup = await this.setupRepository.getSetupById(setupId);

    if (!setup) {
      throw new NotFoundError('Setup não encontrado.');
    }

    return await this.commentRepository.createComment(params);
  }

  async updateComment(
    commentId: string,
    params: IParamsUpdateComment,
  ): Promise<void> {
    const comment = await this.commentRepository.getCommentById(commentId);

    if (!comment) {
      throw new NotFoundError('Comentário não encontrado.');
    }

    await this.commentRepository.updateComment(commentId, params);
  }

  async deleteComment(commentId: string): Promise<void> {
    const comment = await this.commentRepository.getCommentById(commentId);

    if (!comment) {
      throw new NotFoundError('Comentário não encontrado.');
    }

    await this.commentRepository.deleteComment(commentId);
  }
}
