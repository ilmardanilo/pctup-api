import dotenv from 'dotenv';

dotenv.config({ path: './environments/.env' });

export const PORT = Number(process.env.PORT) || 1014;
