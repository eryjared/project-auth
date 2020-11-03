const router = require("express").Router();

const { authenticate } = require("../../services/middlewares");
const UserController = require("./controller");

const path = "/users";

// const { model } = require("./model");

// >> Here will be the
// definition of the routes.


router.get("", async (req, res) => {
  res.status(200).json({ msg: "good" });
});
router.get("/getAll", UserController.getAll);
router.post("/create", UserController.create);
router.get("/me/:id", authenticate, UserController.getOneUser);
router.put("/me/:id", UserController.update);
router.delete("/me/:id", UserController.delete);

module.exports = {
  path,
  router,
};
