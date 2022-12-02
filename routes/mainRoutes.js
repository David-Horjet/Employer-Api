const express = require('express');

// creating the userRouter
const mainRouter = express.Router();

// importing the controller
const mainController = require('../controllers/mainController');

// home
mainRouter.get('/', mainController.home);

// test
mainRouter.get('/offline', mainController.offline);

// 404
mainRouter.get('*', mainController.lost)



// exporting the user router
module.exports = {
     mainRouter
};