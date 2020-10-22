const {model} = require('./model');
const UserController = {};

// >> Here will be the
// endpoints for the Users.

UserController.getAll = (req, res) =>
    model.find({}, {username: 1,password: 1, _v: 1 })
      .then(r => res.json(r))
      .catch(err => res.status(400).json(err));

UserController.getOneUser = (req, res) => {
    model.findById(req.params.id, { password: 0 })
      .then(r => res.json(r))
      .catch(err => res.status(400).json(err));
}

UserController.create = (req, res) =>
    model.create(req.body)
      .then(r => res.json(r))
      .catch(err => res.status(400).json(err));

UserController.update = (req, res) =>
    model.updateOne({ _id: req.params.id }, req.body)
      .then(r => res.json(r))
      .catch(err => res.status(400).json(err));

UserController.delete = (req, res) =>
    model.findByIdAndDelete(req.params.id)
      .then(r => res.json(r))
      .catch(err => res.status(400).json(err));

module.exports = UserController;