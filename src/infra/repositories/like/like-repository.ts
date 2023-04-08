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

  async getLikeByUserIdAndSetupId({
    usuarioId,
    setupId,
  }: IParamsGetLikeByUserIdAndSetupId): Promise<ILike | null> {
    const like = await this.likeCollection
      .findOne({
        usuarioId: new Types.ObjectId(usuarioId),
        setupId: new Types.ObjectId(setupId),
      })
      .lean();

    return like && likeToDomain(like);
  }

  async getLikeById(likeId: string): Promise<ILike | null> {
    const like = await this.likeCollection
      .findOne({
        _id: new Types.ObjectId(likeId),
      })
      .lean();

    return like && likeToDomain(like);
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
