const express = require('express');

const routes = express.Router();

// MIDDLEWARE
const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');

// CONTROLLER

const authController = require('./controllers/authController');
const dashController = require('./controllers/dashController');
const projectController = require('./controllers/projectController');
const sectionController = require('./controllers/sectionController');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.use('/app', authMiddleware);

// AUTH

routes.get('/', authController.signin);
routes.get('/signup', guestMiddleware, authController.signup);
routes.get('/signout', authController.signout);
routes.post('/register', guestMiddleware, authController.register);
routes.post('/authenticate', authController.authenticate);

// DASH
routes.get('/app/dashboard', dashController.index);

// PROJ
routes.get('/app/project/:id', projectController.show);
routes.post('/app/project', projectController.store);
routes.delete('/app/project/:id', projectController.destroy);

// SECT
routes.get('/app/project/:projectId/section/:sectionId', sectionController.show);
routes.post('/app/project/:projectId/section/', sectionController.store);

routes.use((req, res) => res.render('errors/404'));

routes.use((err, req, res, _next) => {
  res.status(err.status || 500);

  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = routes;
