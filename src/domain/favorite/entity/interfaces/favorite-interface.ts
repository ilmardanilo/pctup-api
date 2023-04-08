import { ObjectId } from 'mongoose';

export interface IFavorite {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  setupId: ObjectId | string;
  createdAt: Date;
}

export interface IParamsCreateFavorite {
  usuarioId: string;
  setupId: string;
}

export interface IParamsGetFavorite {
  _id?: string;
  usuarioId?: string;
  setupId?: string;
}
