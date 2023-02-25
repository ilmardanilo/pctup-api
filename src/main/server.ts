import { PORT, DATABASE_URI, DATABASE_NAME } from './config/env-constants';
import { app } from './config/app';
import mongoose from 'mongoose';

mongoose
  .set('strictQuery', false)
  .connect(DATABASE_URI, {
    dbName: DATABASE_NAME,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`),
    );
  })
  .catch((error) => {
    console.log(error);
  });
