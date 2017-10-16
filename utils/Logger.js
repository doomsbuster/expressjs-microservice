var winston = require('winston');
var rotateLog = require('winston-daily-rotate-file');
var fs = require('fs');
const LOG_DIR = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

const log = new (winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            colorize: true
        }),
        new(rotateLog)({
            filename: './logs/app.log',
            prepend: true
        })
    ],
    level: 'info',
});

module.exports = log;