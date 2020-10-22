require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

module.exports = (apiRoot, routes) => {
  const app = express();
  
  app.use(morgan('dev'))
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // >>> Here is where all the routes
  // are register on the app.
  //
  // A) Uncomment this line:
  app.use(apiRoot, routes);
  
  return app;
}