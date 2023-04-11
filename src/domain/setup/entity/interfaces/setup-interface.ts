import { ObjectId } from 'mongoose';

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
}

export interface IImage {
  publicId: string;
  url: string;
}

export interface IParamsCreateSetup {
  usuarioId: string;
  titulo?: string;
  descricao: string;
}

export interface IParamsGetSetups {
  usuarioId?: string;
  estaAtivo?: boolean;
  estaPublico?: boolean;
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
