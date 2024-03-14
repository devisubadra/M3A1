// middlewares.js
const makeUpperCase = (req, res, next) => {
    // Modify the request or response object here
    next(); // Call next to pass control to the next middleware function
};

module.exports = { makeUpperCase };
