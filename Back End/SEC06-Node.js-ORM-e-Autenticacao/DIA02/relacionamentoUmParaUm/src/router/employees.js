const express = require('express');

const employeeRoute = express.Router();

const employee = require('../controllers/employee.controller');

employeeRoute.get('/:id', employee.getById);
employeeRoute.get('/', employee.getAll);

module.exports = employeeRoute;