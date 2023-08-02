const { Router } = require("express");
const router = Router();
const usersRoutes = require('./usersRoutes')
const contentsRoutes = require('./contentsRoutes')

router.use('/users', usersRoutes)
router.use('/contents', contentsRoutes)


module.exports = router;
