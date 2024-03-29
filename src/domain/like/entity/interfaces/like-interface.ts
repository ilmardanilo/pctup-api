import { ObjectId } from 'mongoose';

export interface ILike {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  setupId: ObjectId | string;
  createdAt: Date;
}

export interface IParamsCreateLike {
  usuarioId: string;
  setupId: string;
}

export interface IParamsGetLikeByUserIdAndSetupId {
  _id?: string;
  usuarioId?: string;
  setupId?: string;
}
