const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/post');

const app = express();

const PORT = 3333;


mongoose.connect('mongodb://localhost/secret-usjt', {
    useNewUrlParser: true, useUnifiedTopology: true
});


app.use(routes);


app.listen(PORT);