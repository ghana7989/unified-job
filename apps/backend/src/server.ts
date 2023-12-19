import express from 'express';
import * as path from 'path';
import pino from 'pino-http';

const app = express();

app.use(pino());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

export default app;
