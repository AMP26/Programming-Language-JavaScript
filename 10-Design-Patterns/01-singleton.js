class Logger {
  static instance = null;

  constructor() {
    if(Logger.instance)
      return Logger.instance;

    this.logs = [];
    this.timestamp = true;
    Logger.instance = this;
  }

  log(message) {
    const logMessage = this.timestamp ? `[${new Date().toString()}] ${message}` : message;
    this.logs.push(logMessage);
    console.log(logMessage);
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
  }
}

const log1 = new Logger();
const log2 = new Logger();

log1.log("First message logged..");
log2.log("Second message logged..");

console.log(log1 === log2);  // true

console.log(log1.getLogs());