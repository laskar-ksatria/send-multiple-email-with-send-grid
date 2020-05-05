const express = require('express');
const Router = express.Router();
const EmailController = require('../controllers/index')

Router.get('/', EmailController.readAll);
Router.post('/', EmailController.create);
Router.post('/send', EmailController.sendEmail);

module.exports = Router;