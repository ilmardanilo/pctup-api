import { IImage } from '../../../../helpers/utils';
import { ObjectId } from 'mongoose';
import { IUser } from '../../../user/entity/interfaces/user-interface';

export interface ISetup {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  titulo?: string;
  descricao: string;
  estaAtivo: boolean;
  estaPublico: boolean;
  imagens?: IImage[];
  createdAt: Date;
  updatedAt?: Date;
  usuario?: IUser;
}

export interface IParamsCreateSetup {
  usuarioId: string;
  titulo?: string;
  descricao: string;
}

export interface IParamsGetSetups {
  usuarioId?: string;
}

export interface IParamsUpdateSetup {
  titulo?: string;
  descricao?: string;
  estaPublico?: boolean;
  imagens?: IImage[];
}

export interface IParamsAddImage {
  setupId: string;
  file: {
    path: string;
    mimeType: string;
  };
}
