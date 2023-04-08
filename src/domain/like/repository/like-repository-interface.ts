import {
  ILike,
  IParamsCreateLike,
  IParamsGetLikeByUserIdAndSetupId,
} from '../entity/interfaces/like-interface';

export interface ILikeRepository {
  createLike(params: IParamsCreateLike): Promise<ILike>;
  getLike(params: IParamsGetLikeByUserIdAndSetupId): Promise<ILike | null>;
  removeLike(likeId: string): Promise<void>;
}
