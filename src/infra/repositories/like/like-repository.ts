import { MLike } from '../../database/mongo/models/like-model';
import { ILikeRepository } from '../../../domain/like/repository/like-repository-interface';
import {
  ILike,
  IParamsCreateLike,
  IParamsGetLikeByUserIdAndSetupId,
} from '../../../domain/like/entity/interfaces/like-interface';
import { Types } from 'mongoose';

export class LikeRepository implements ILikeRepository {
  private readonly likeCollection = MLike;

  async createLike(params: IParamsCreateLike): Promise<ILike> {
    const result = await this.likeCollection.create(params);

    const like = result.toObject();

    return likeToDomain(like);
  }

  async getLike(
    params: IParamsGetLikeByUserIdAndSetupId,
  ): Promise<ILike | null> {
    const like = await this.likeCollection.findOne(params).lean();

    return like && likeToDomain(like);
  }

  async getLikesByUserId(userId: string): Promise<ILike[]> {
    const likes = await this.likeCollection
      .find({ usuarioId: new Types.ObjectId(userId) })
      .lean();

    return likes && likes.map((like) => likeToDomain(like));
  }

  async removeLike(likeId: string): Promise<void> {
    await this.likeCollection.deleteOne({
      _id: new Types.ObjectId(likeId),
    });
  }
}

const likeToDomain = (like: any): ILike => {
  return {
    ...like,
    _id: like._id.toString(),
    usuarioId: like.usuarioId.toString(),
    setupId: like.setupId.toString(),
  };
};
