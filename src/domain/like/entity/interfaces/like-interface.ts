import { ObjectId } from 'mongoose';

export interface ILike {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  setupId: ObjectId | string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IParamsCreateLike {
  usuarioId: string;
  setupId: string;
}

export interface IParamsGetLikeByUserIdAndSetupId extends IParamsCreateLike {}
