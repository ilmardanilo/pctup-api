import mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema(
  {
    publicId: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const SetupSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    titulo: {
      type: String,
      required: false,
    },
    descricao: {
      type: String,
      required: true,
    },
    estaAtivo: {
      type: Boolean,
      required: true,
      default: false,
    },
    estaPublico: {
      type: Boolean,
      required: true,
      default: false,
    },
    imagens: {
      type: [ImageSchema],
      required: false,
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
  { collection: 'setup', versionKey: false },
);

export const MSetup = mongoose.model('setup', SetupSchema);
