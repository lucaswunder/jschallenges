const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');
const dashController = require('./controllers/dashController');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.get('/', authController.signin);
routes.get('/signup', authController.signup);
routes.post('/register', authController.register);

routes.post('/authenticate', authController.authenticate);

routes.get('/app/dashboard', dashController.index);

module.exports = routes;
