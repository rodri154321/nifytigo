const { Router } = require("express");

const router = Router();

const {postUsersBuyNfts,getUsersBuyNfts }= require('../handlers/handlerUsersBuyNfts')


router
.post('/buy', postUsersBuyNfts)
.get('/buy/:id', getUsersBuyNfts)



module.exports = router;