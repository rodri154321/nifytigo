const { Router } = require("express");
const loginGoogleRouter = Router();
const { loginGoogle } = require("../handlers/loginGoogleHandler");

loginGoogleRouter
.post("/user", loginGoogle)

module.exports = loginGoogleRouter;