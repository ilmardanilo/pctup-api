import { MComment } from '../../database/mongo/models/comment-model';
import { ICommentRepository } from '../../../domain/comment/repository/comment-repository-interface';
import {
  IComment,
  IParamsCreateComment,
} from '../../../domain/comment/entity/interfaces/comment-interface';

export class CommentRepository implements ICommentRepository {
  private readonly commentCollection = MComment;

  async createComment(params: IParamsCreateComment): Promise<IComment> {
    const result = await this.commentCollection.create(params);

    const comment = result.toObject();

    return {
      ...comment,
      _id: comment._id.toString(),
      usuarioId: comment.usuarioId.toString(),
      setupId: comment.setupId.toString(),
    } as unknown as IComment;
  }
}
