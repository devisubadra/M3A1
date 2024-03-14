// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { makeUpperCase } = require('./middlewares');
const studentsRouter = require('./controllers/students');
const app = express();

app.use(bodyParser.json()); // using the middleware body-parser to parse the body of the request
app.use(makeUpperCase); // global middleware
app.use('/students', studentsRouter); // use studentsRouter

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);
    res.send('Hello');
});

const mongoose = require('mongoose');
const uri = "mongodb+srv://dvenka12:<Devisubadra5>@m3a1cluster.ocxtahc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



