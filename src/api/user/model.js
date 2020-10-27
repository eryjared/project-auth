const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// >> Here will be the User schema.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

// >> Here will be the pre methods for the schema.
UserSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 12);
  this.password = hash;
  next();
});

// >> Here will be the User methods for the schema.
UserSchema.methods = {
  validatePassword(password) {
    return bcrypt.compareSync(password, this.password);
  },
};

// >> Here will be the User model using the User schema.

// module.exports = User = mongoose.model("User", UserSchema);
const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  schema: UserSchema,
  model: UserModel,
}