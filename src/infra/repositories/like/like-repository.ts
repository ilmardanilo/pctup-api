import { MLike } from '../../database/mongo/models/like-model';
import { ILikeRepository } from '../../../domain/like/repository/like-repository-interface';
import {
  ILike,
  IParamsCreateLike,
} from '../../../domain/like/entity/interfaces/like-interface';

export class LikeRepository implements ILikeRepository {
  private readonly likeCollection = MLike;

  async createLike(params: IParamsCreateLike): Promise<ILike> {
    const result = await this.likeCollection.create(params);

    const like = result.toObject();

    return {
      ...like,
      _id: like._id.toString(),
      usuarioId: like.usuarioId.toString(),
      setupId: like.setupId.toString(),
    } as unknown as ILike;
  }
}
