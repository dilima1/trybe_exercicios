const express = require('express');
const employeeRoute = require('./router/employees');

const app = express();
app.use(express.json());

app.use('/employees', employeeRoute);

module.exports = app;