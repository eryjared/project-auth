const router = require('express').Router();

const AuthController = require("./controller");
const path = '/auth';

const user = require("../user");
const { model, schema } = require("../user/model");

// >> Here will be the
// definition of the routes.

router.get('/', AuthController.index);
router.post("/registerUser", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.post('/signIn', AuthController.signIn);

module.exports = {
  path,
  router,
}
