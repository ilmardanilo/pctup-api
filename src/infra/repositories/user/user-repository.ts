import { MUser } from '../../database/mongo/models/user-model';
import {
  IUser,
  IParamsUpdateUser,
} from '../../../domain/user/entity/interfaces/user-interface';
import { IUserRepository } from '../../../domain/user/repository/user-repository-interface';
import { Types } from 'mongoose';

export class UserRepository implements IUserRepository {
  private readonly userCollection = MUser;

  async getUserById(userId: string): Promise<IUser | null> {
    const user = await this.userCollection
      .findOne(
        {
          _id: new Types.ObjectId(userId),
        },
        {
          _id: {
            $toString: '$_id',
          },
          nome: 1,
          email: 1,
          dataNascimento: 1,
          profissao: 1,
          estado: 1,
          cidade: 1,
          cargo: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      )
      .lean();

    return user as unknown as IUser;
  }

  async updateUserById(
    userId: string,
    params: IParamsUpdateUser,
  ): Promise<void> {
    await this.userCollection.updateOne(
      {
        _id: new Types.ObjectId(userId),
      },
      {
        $set: {
          ...params,
          updatedAt: new Date(),
        },
      },
    );
  }

  async deleteUserById(userId: string): Promise<void> {
    await this.userCollection.deleteOne({
      _id: new Types.ObjectId(userId),
    });
  }
}
