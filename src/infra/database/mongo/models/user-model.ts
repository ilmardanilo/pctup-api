import {
  CARGO,
  IMAGE_DEFAULT,
} from '../../../../domain/user/entity/user-constants';
import mongoose from 'mongoose';
import { ImageSchema } from './setup-model';

const UsuarioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    dataNascimento: {
      type: Date,
      required: false,
    },
    profissao: {
      type: String,
      required: false,
    },
    estado: {
      type: String,
      required: false,
    },
    cidade: {
      type: String,
      required: false,
    },
    cargo: {
      type: String,
      required: true,
      enum: CARGO,
      default: CARGO.USER,
    },
    imagem: {
      type: ImageSchema,
      required: true,
      default: IMAGE_DEFAULT,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
  },
  { collection: 'usuario', versionKey: false },
);

export const MUser = mongoose.model('usuario', UsuarioSchema);
