import { ILike, IParamsCreateLike } from './like-interface';

export interface ILikeService {
  addLike(params: IParamsCreateLike): Promise<ILike>;
  removeLike(likeId: string): Promise<void>;
  getLikesByUserId(userId: string): Promise<ILike[]>;
}
