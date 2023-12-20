import { setupDatabase } from './config/database';
import app from './server';
import logger from 'src/utils/logger';
import 'dotenv/config';

const port = process.env.PORT || 3333;

(async function () {
  await setupDatabase();
  const server = app.listen(port, () => {
    logger.info(`Listening at http://localhost:${port}`);
  });
  server.on('error', console.error);
})();
