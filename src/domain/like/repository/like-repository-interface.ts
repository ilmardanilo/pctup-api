import {
  ILike,
  IParamsCreateLike,
  IParamsGetLikeByUserIdAndSetupId,
} from '../entity/interfaces/like-interface';

export interface ILikeRepository {
  createLike(params: IParamsCreateLike): Promise<ILike>;
  getLikeByUserIdAndSetupId(
    params: IParamsGetLikeByUserIdAndSetupId,
  ): Promise<ILike | null>;
  getLikeById(likeId: string): Promise<ILike | null>;
  removeLike(likeId: string): Promise<void>;
}
