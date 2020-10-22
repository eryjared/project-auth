const router = require('express').Router();
// A) Uncomment this line:
const MainController = require('./controller');

const path = '';

// >> Here will be the
// definition of the routes.
//
// A) Uncomment this line:
router.get('', MainController.getIndex);

// This endpoint is to avoid error 404 for favicon
router.get('/favicon.ico', MainController.getFavicon);

module.exports = {
  path,
  router,
}