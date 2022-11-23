const express = require('express');
const bookRoute = require('./router/books');

const app = express();
app.use(express.json());

app.use('/books', bookRoute);

module.exports = app;