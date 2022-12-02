const express = require('express');
// creating the router
const employeeRouter = express.Router();
const employeeController = require('../controllers/employeeController');


// get all employees
employeeRouter.get('/all', employeeController.getEmployees);

// get single employees
employeeRouter.get('/:id', employeeController.getEmployee);

// create new employee
employeeRouter.post('/new', employeeController.createEmployee);

// update employee
employeeRouter.put('/:id', employeeController.updateEmployee);

// delete employee
employeeRouter.delete('/:id', employeeController.deleteEmployee);

// exporting our post router
module.exports = {
     employeeRouter
};