// >> Here is where will
// declared the middlewares

const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config");

const authenticate = (req, res, next) => {
    console.log("REQ HEADERS");
    console.log(req.headers);
    const authorization = req.headers.authorization;
    if(!authorization)
      res.status(403).json({message: "No authorization header providen"})
    console.log("AUTHO");
    console.log(authorization);
    const token = authorization.split(' ')[1];
    if(!token)
      res.status(403).json({message: "No authorization token providen"})

    jwt.verify(token, jwtSecret, (err, user) => {
        if(err) {
            res.status(403).json({message: err.message})
        }else {
            console.log(user);
            req.user = user;
            next()
        }
    })
}

module.exports = {
    authenticate,
}
