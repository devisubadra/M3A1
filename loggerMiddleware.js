// loggerMiddleware.js
function loggerMiddleware(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    console.log('Request Type:', req.method);
    next(); // Call next() to pass control to the next middleware in the chain
}
module.exports = loggerMiddleware;
