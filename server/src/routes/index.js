const { Router } = require("express");
const router = Router();
const videoGamesRouter = require("./videoGamesRouter")
//const usersRoutes = require('./usersRoutes')
//const collectionsRoutes = require('./collectionsRoutes')

/*router.use('/users', usersRoutes)
router.use('/collection', collectionsRoutes)*/

router.use("/videogames", videoGamesRouter)

module.exports = router;
