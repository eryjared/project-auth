const MainController = {};

MainController.getIndex = (req, res) => {
  let base_uri = req.protocol + '://' + req.hostname;
  const port = req.connection.localPort;
  
  if (port === 3000) {
    base_uri += ':' + port;
  }

  res.json({
    auth: `${base_uri}/auth`,
    users: `${base_uri}/users`,
    userProfile: `${base_uri}/users/me`,
  });
}

MainController.getFavicon = (req, res) => res.status(204)

module.exports = MainController;