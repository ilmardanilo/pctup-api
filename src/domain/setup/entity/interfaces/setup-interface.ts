import { ObjectId } from 'mongoose';

export interface ISetup {
  _id: ObjectId | string;
  usuarioId: ObjectId | string;
  titulo?: string;
  descricao: string;
  estaAtivo: boolean;
  estaPublico: boolean;
  imagens?: [string];
  createdAt: Date;
  updatedAt?: Date;
}

export interface IParamsCreateSetup {
  usuarioId: string;
  titulo?: string;
  descricao: string;
}
