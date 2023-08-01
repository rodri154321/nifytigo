const { Router } = require("express");
const router = Router();
const usersRoutes = require('./usersRoutes')
const collectionsRoutes = require('./collectionsRoutes')

router.use('/users', usersRoutes)
router.use('/collection', collectionsRoutes)


module.exports = router;
