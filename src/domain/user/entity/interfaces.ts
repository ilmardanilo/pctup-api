import { CARGO } from './constants';
import { ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId | string;
  nome: string;
  email: string;
  senha: string;
  dataNascimento?: Date;
  profissao?: string;
  estado?: string;
  cidade?: string;
  cargo: CARGO;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IParamsCreateAccount {
  name: string;
  email: string;
  password: string;
}
