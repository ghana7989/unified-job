import mongoose from 'mongoose';
import { DEV_DB_STRING, PROD_DB_STRING, TEST_DB_STRING } from './env';
import logger from 'src/utils/logger';

type environment = 'development' | 'production' | 'test';

async function setupDatabase(environment: environment): Promise<boolean> {
  let dbUrl = DEV_DB_STRING;
  if (environment === 'production') {
    dbUrl = PROD_DB_STRING;
  } else if (environment === 'test') {
    dbUrl = TEST_DB_STRING;
  }
  try {
    await mongoose.connect(dbUrl);
    logger.info(`Connected to ${dbUrl}`);
    return true;
  } catch (error) {
    logger.error(`Error connecting to ${dbUrl}`, error);
    return false;
  }
}

export { setupDatabase };
