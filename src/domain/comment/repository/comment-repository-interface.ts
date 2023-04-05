import {
  IComment,
  IParamsCreateComment,
} from '../entity/interfaces/comment-interface';

export interface ICommentRepository {
  createComment(params: IParamsCreateComment): Promise<IComment>;
  getCommentById(commentId: string): Promise<IComment>;
}
