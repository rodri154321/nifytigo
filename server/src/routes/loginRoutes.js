const { Router } = require("express");
const loginRouter = Router();
const { loginUser } = require("../handlers/loginHandler");

loginRouter
.post("/login", loginUser)

module.exports = loginRouter;