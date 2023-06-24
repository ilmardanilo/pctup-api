import { ObjectId } from 'mongoose';
import { IUser } from '../../../user/entity/interfaces/user-interface';

export interface IComment {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  setupId: ObjectId | string;
  descricao: string;
  createdAt: Date;
  updatedAt?: Date;
  usuario?: IUser;
}

export interface IParamsCreateComment {
  usuarioId: string;
  setupId: string;
  descricao: string;
}

export interface IParamsUpdateComment {
  descricao: string;
}
