const { Router } = require("express");
const router = Router();
const usersRoutes = require('./usersRoutes')



router.get('/users', usersRoutes)


module.exports = router;
