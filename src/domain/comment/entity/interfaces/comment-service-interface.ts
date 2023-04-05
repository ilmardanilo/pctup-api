import { IComment, IParamsCreateComment } from './comment-interface';

export interface ICommentService {
  createComment(params: IParamsCreateComment): Promise<IComment>;
}
