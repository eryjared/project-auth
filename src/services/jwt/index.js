const { jwtSecret } = require('../../config');
const jwt = require('jsonwebtoken');

const thirtyMinutes = () => {
  const myDate = new Date();
  myDate.setDate(myDate.getDate() + (30 * 60 * 1000));
  return myDate;
};

// >> Here is where login
// and verification functions will be declared

const jwtSignIn = ({_id, username, firstname, lastname, email}) => {
    return jwt.sign({
      id: _id,
      username: username, 
      firstname: `${firstname}`,
      lastname: `${lastname}`,
      email: email,
      exp: thirtyMinutes().getTime() / 1000,
      iat: new Date().getTime() / 1000 }, jwtSecret);
}

module.exports = {
    jwtSignIn,
}