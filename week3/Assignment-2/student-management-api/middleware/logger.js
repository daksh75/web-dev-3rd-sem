// middleware/logger.js
// Custom logger middleware: logs HTTP Method, URL, and Timestamp for every request

function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
}

module.exports = logger;
