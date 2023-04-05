import { ObjectId } from 'mongoose';

export interface IComment {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  setupId: ObjectId | string;
  descricao: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IParamsCreateComment {
  usuarioId: string;
  setupId: string;
  descricao: string;
}
