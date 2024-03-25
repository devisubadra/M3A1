// app.js or server.js
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

app.use(loggerMiddleware); // Apply the middleware to all routes

// Define your routes and other server configurations here

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
