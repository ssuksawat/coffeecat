'use strict';

const errors = require('../components/errors');

const AuthRouter = require('../components/auth');
const CoffeeRouter = require('../components/coffee');
const FeelingRouter = require('../components/feelings');
const IngredientRouter = require('../components/ingredients');

module.exports = function (app, config) {

  // API routes
  app.use('/api', AuthRouter);
  app.use('/api/coffee', CoffeeRouter);
  app.use('/api/feelings', FeelingRouter);
  app.use('/api/ingredients', IngredientRouter);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(config.rootPath + '/public/index.html');
    });
};
