const { Router } = require("express");

const router = Router();

const { getNftHandler,postNftHandler }= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/create', postNftHandler)


module.exports = router;
