const router = require('express').Router();

const AuthController = require("./controller");
const path = '/auth';

const user = require("../user");
const { model, schema } = require("../user/model");

// >> Here will be the
// definition of the routes.

router.get('/', AuthController.index);
router.post("/registerUser", AuthController.registerUser);
router.post("/loginUser", AuthController.loginUser);

module.exports = {
  path,
  router,
}
