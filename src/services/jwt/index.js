const { jwtSecret } = require('../../config');
const jwt = require('jsonwebtoken');

const tomorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
};

// >> Here is where login
// and verification functions will be declared

const jwtSignIn = ({_id, username, firstname, lastname, email}) => {
    return jwt.sign({
      id: _id,
      username, 
      name: `${firstname} ${lastname}`,
      email,
      exp: tomorrow().getTime() / 1000,
      iat: new Date().getTime() / 1000
    }, jwtSecret);
}

module.exports = {
    jwtSignIn,
}