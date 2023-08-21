const { Router } = require("express");
const router = Router();

const usersRoutes = require('./usersRoutes')
const nftRoutes = require('./nftRoutes')
const categoriesRoutes = require('./categoriesRoutes')
const shopCartRoutes = require('./shopCartRoutes')
const loginRoutes = require('./loginRoutes')
const loginGoogleRoutes = require('./loginGoogleRoutes')
const buyNft = require('./usersBuyNftRoutes')
//const videoGamesRouter = require("./videoGamesRouter")
const saveBoughtNFT = require("./saveBoughtNfts")


router.use('/users', usersRoutes)
router.use('/nft', nftRoutes)
router.use('/categories', categoriesRoutes)
router.use('/shop', shopCartRoutes)
router.use("/login", loginRoutes);
router.use("/login/google", loginGoogleRoutes);
//router.use('/videogames', videoGamesRouter)

router.use("/" , saveBoughtNFT)
// routes.js







module.exports = router;

//Buscar por Id y por nombre los users. eso
