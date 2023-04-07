import { ILike, IParamsCreateLike } from '../entity/interfaces/like-interface';

export interface ILikeRepository {
  createLike(params: IParamsCreateLike): Promise<ILike>;
}
