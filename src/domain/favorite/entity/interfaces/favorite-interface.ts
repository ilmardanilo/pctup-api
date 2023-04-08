import { ObjectId } from 'mongoose';
import { ISetup } from '../../../setup/entity/interfaces/setup-interface';

export interface IFavorite {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  setupId: ObjectId | string;
  createdAt: Date;
  setup?: ISetup;
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
