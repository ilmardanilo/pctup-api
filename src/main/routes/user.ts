import { Router } from 'express';

export const userRouter = Router();

userRouter.post('/signup', (req, res) => {
  res.json({ message: '...' });
});
