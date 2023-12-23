import cookieParser from 'cookie-parser';
import express from 'express';
import * as path from 'path';
import pino from 'pino-http';
import authRouter from 'src/api/routes/auth.routes';
import userRouter from './api/routes/user.routes';

const app = express();

app.use(
  pino({
    transport: {
      target: 'pino-dev',
    },
  })
);

app.use(express.json());
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);

export default app;
