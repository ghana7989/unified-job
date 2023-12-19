import { setupDatabase } from './config/database';
import app from './server';
import logger from 'src/utils/logger';

const port = process.env.PORT || 3333;

(async function () {
  const isSuccess = await setupDatabase('development');
  if (!isSuccess) {
    logger.fatal('Failed to connect to database');
    process.exit(1);
  }
  const server = app.listen(port, () => {
    logger.info(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
})();
