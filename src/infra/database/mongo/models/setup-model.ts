import mongoose from 'mongoose';

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
      type: [String],
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
