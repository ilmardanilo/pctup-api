import {
  IComment,
  IParamsCreateComment,
  IParamsUpdateComment,
} from './comment-interface';

export interface ICommentService {
  createComment(params: IParamsCreateComment): Promise<IComment>;
  updateComment(commentId: string, params: IParamsUpdateComment): Promise<void>;
  deleteComment(commentId: string): Promise<void>;
}
