const data = require("../utils/users");

function loginc(req, res) {
  const {email, password} = req.query;

  const found = data.find(
    (user) => user.email === email && user.password === password
  );

  const access = found ? true : false;
  res.status(200).json({access});
}

module.exports = loginc;