import express from 'express';
import * as path from 'path';
import pino from 'pino-http';
import authRouter from 'src/api/routes/auth.routes';

const app = express();

app.use(pino());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/auth', authRouter);

export default app;
