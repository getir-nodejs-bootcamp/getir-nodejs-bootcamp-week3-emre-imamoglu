const fs = require("fs");
const path = require("path");
const appRoot = require('app-root-path');
const logPath = path.join(`${appRoot}`, "logs", "requestLogs.txt");

const logger = (req,res,next) => {
    /**
   * Destructure the data the request contains,
   * we will be putting them into the log file
   */
  const { method, socket, url } = req;
  const { remoteAddress } = socket;

  /**
   * We define the log structure as an object
   */
  let content = JSON.stringify({
    timestamp: Date.now(),
    method,
    remoteAddress,
    url,
  });

  content = content + '\n'; // Makes sure that next log written below the previous one


  /**
   * Write the data in the log content defined above to a file
   * after stringifying it.
   */
  fs.appendFile(logPath, content, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  return next();
}

module.exports = {
    logger
}