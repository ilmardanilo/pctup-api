import dotenv from 'dotenv';

dotenv.config({ path: './environments/.env' });

export const PORT = Number(process.env.PORT) || 1014;
export const DATABASE_URI = String(process.env.DATABASE_URI);
export const DATABASE_NAME = String(process.env.DATABASE_NAME);
