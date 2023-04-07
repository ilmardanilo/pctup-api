import { ILike, IParamsCreateLike } from './like-interface';

export interface ILikeService {
  addLike(params: IParamsCreateLike): Promise<ILike>;
}
