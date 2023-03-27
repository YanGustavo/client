'use client'
import browserifyFs from "browserify-fs";

const errorLogPath = "error.log";

if (typeof self === undefined) {
 self = window;
}

export const logError = (error: Error) => {
  const log = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
  };

  const logString = JSON.stringify(log) + "\n";

  browserifyFs.appendFile(errorLogPath, logString, (err: Error | null) => {
    if (err) {
      console.error(`Error saving error log: ${err.message}`);
    }
  });
};