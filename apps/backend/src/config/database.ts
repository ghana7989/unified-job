import mongoose from 'mongoose';
import logger from 'src/utils/logger';

async function setupDatabase(): Promise<boolean> {
  const dbUrl = process.env.NX_DB_URL;
  try {
    await mongoose.connect(dbUrl);
    logger.info(`Connected to ${dbUrl}`);
    return true;
  } catch (error) {
    logger.error(`Error connecting to ${dbUrl}`, error);
    process.exit(1);
  }
}

export { setupDatabase };
