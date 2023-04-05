import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    setupId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
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
  { collection: 'comentario', versionKey: false },
);

export const MComment = mongoose.model('comentario', CommentSchema);
