import {
  IComment,
  IParamsCreateComment,
  IParamsUpdateComment,
} from '../entity/interfaces/comment-interface';

export interface ICommentRepository {
  createComment(params: IParamsCreateComment): Promise<IComment>;
  getCommentById(commentId: string): Promise<IComment>;
  updateComment(commentId: string, params: IParamsUpdateComment): Promise<void>;
}
