import { MComment } from '../../database/mongo/models/comment-model';
import { ICommentRepository } from '../../../domain/comment/repository/comment-repository-interface';
import {
  IComment,
  IParamsCreateComment,
  IParamsUpdateComment,
} from '../../../domain/comment/entity/interfaces/comment-interface';
import { Types } from 'mongoose';

export class CommentRepository implements ICommentRepository {
  private readonly commentCollection = MComment;

  async createComment(params: IParamsCreateComment): Promise<IComment> {
    const result = await this.commentCollection.create(params);

    const comment = result.toObject();

    return toCommentDomain(comment);
  }

  async getCommentById(commentId: string): Promise<IComment> {
    const comment = (await this.commentCollection
      .findOne({ _id: new Types.ObjectId(commentId) })
      .lean()) as unknown as IComment;

    return comment && toCommentDomain(comment);
  }

  async updateComment(
    commentId: string,
    params: IParamsUpdateComment,
  ): Promise<void> {
    await this.commentCollection.updateOne(
      { _id: new Types.ObjectId(commentId) },
      {
        $set: {
          ...params,
          updatedAt: new Date(),
        },
      },
    );
  }

  async deleteComment(commentId: string): Promise<void> {
    await this.commentCollection.deleteOne({
      _id: new Types.ObjectId(commentId),
    });
  }

  async getCommentsBySetupId(setupId: string): Promise<IComment[]> {
    const comments = await this.commentCollection.aggregate([
      {
        $match: {
          setupId: new Types.ObjectId(setupId),
        },
      },
      {
        $lookup: {
          from: 'usuario',
          localField: 'usuarioId',
          foreignField: '_id',
          as: 'usuario',
        },
      },
      {
        $unwind: {
          path: '$usuario',
        },
      },
      {
        $project: {
          'usuario.senha': 0,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
    ]);

    return comments.map((comment) => {
      return toCommentDomain(comment);
    });
  }
}

const toCommentDomain = (comment: any): IComment => {
  const commentFormated: IComment = {
    ...comment,
    _id: String(comment._id),
    usuarioId: String(comment.usuarioId),
    setupId: String(comment.setupId),
  };

  const userFormated = {
    ...comment.usuario,
    _id: String(comment.usuario?._id),
  };

  if (comment.usuario) {
    commentFormated.usuario = userFormated;
  }

  return commentFormated;
};
