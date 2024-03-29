import { IImage } from '../../../../helpers/utils';
import { CARGO } from '../user-constants';
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
  imagem: IImage;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IParamsCreateAccount {
  name: string;
  email: string;
  password: string;
}

export interface IResponseCreateAndAuthenticateAccount {
  id: string;
  name: string;
  accessToken: string;
}

export interface IParamsUpdateUser {
  nome?: string;
  dataNascimento?: Date;
  profissao?: string;
  estado?: string;
  cidade?: string;
  imagem?: IImage;
}
