const { Router } = require("express");
const router = Router();

const usersRoutes = require('./usersRoutes')
const nftRoutes = require('./nftRoutes')

router.use('/users', usersRoutes)
router.use('/nft', nftRoutes)



module.exports = router;

//Buscar por Id y por nombre los users.
