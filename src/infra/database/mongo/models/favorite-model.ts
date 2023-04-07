import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema(
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
  { collection: 'favorito', versionKey: false },
);

export const MFavorite = mongoose.model('favorito', FavoriteSchema);
