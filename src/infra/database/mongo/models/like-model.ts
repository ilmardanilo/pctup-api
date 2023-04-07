import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    setupId: {
      type: mongoose.Types.ObjectId,
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
  { collection: 'curtida', versionKey: false },
);

export const MLike = mongoose.model('curtida', LikeSchema);
