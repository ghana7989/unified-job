import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import * as path from 'path';
import pino from 'pino-http';
import authRouter from 'src/api/routes/auth.routes';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';

const app = express();

const redisClient = createClient({
  url: ' redis://localhost:6379',
});
redisClient.connect().catch(console.error);
const redisStore = new RedisStore({
  client: redisClient,
  prefix: 'session-store:',
});
app.use(
  pino({
    level: 'debug',
  })
);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
    store: redisStore,
  })
);
app.use(cookieParser());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/auth', authRouter);

export default app;
