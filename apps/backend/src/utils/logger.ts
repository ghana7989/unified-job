import pino from 'pino';

const logger = pino({
  timestamp() {
    return `,"time":"${new Date().toISOString()}"`;
  },
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export default logger;
