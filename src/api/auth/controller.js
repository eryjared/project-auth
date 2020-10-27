const AuthController = {};

const { model } = require("../user/model");
const { jwtSignIn } = require("../../services/jwt");
const user = require("../user");

const path = "/auth";

// >> Here will be the
// endpoints for the Users.

AuthController.index = (req, res) => {
    let base_uri = req.protocol + "://" + req.hostname + path;
    res.json({
        register: `${base_uri}`,
        login: `${base_uri}/login`,
    });
};
  
AuthController.registerUser = async (req, res) => {
    let user = new model(req.body);

    await user
      .save()
      .then(() => {
        res.status(200).json({ msg: "Successfully created" });
      })
      .catch((e) => {
        res.status(201).json({ msg: `Error ${e.message}` });
    });
};
  
AuthController.loginUser = async (req, res) => {
    let { username, password } = req.body;

    user = await model.findOne({ username: username }).then(async (user) => {
        const valid = await user.validatePassword(password);
        if (valid) {
            res.status(200).json({ msg: "Validated" });
        } else {
            res.status(401).json({ msg: "Not validated" });
        }
    });
};

AuthController.signIn = ({ body: { username, password } }, res) =>
    model.findOne({ username }, {_v: 0, createdAt:0, updateAt: 0 })
    .then((user) => user ? user : null)
    .then((user) => user.validatePassword(password) ? jwtSignIn(user) : null)
    .then((token) => res.json({
        token: token,
        type: 'Bearer'
    }))
    .catch((err) => res.status(401).json(err));

module.exports = AuthController;