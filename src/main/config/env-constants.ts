import dotenv from 'dotenv';

dotenv.config({ path: './environments/.env' });

export const PORT = Number(process.env.PORT) || 1014;
export const DATABASE_URI = String(process.env.DATABASE_URI);
export const DATABASE_NAME = String(process.env.DATABASE_NAME);
export const PRIVATE_KEY = String(process.env.PRIVATE_KEY);
export const CLOUDINARY_CLOUD_NAME = String(process.env.CLOUDINARY_CLOUD_NAME);
export const CLOUDINARY_API_KEY = String(process.env.CLOUDINARY_API_KEY);
export const CLOUDINARY_API_SECRET = String(process.env.CLOUDINARY_API_SECRET);
