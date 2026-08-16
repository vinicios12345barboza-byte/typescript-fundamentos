// let logType = 'info';
// logType = 'error';

// let logType: 'info'
// logType = 'ifo';

type LogType = 'info' | 'error' | 'warn';

export function logger(type: LogType, message: string) {
  switch (type) {
    case 'info':
      console.log(`INFO: ${message}`);
      break;
    case 'error':
      console.error(`ERROR: ${message}`);
      break;
    case 'warn':
      console.warn(`WARN: ${message}`);
      break;
    default:
      console.log(`UNKNOWN TYPE: ${message}`);
  }
}

logger('warn', 'This is a warning message');