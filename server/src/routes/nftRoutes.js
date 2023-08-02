const { Router } = require("express");

const router = Router();

const { getNftHandler,postNftHandler }= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/', postNftHandler)


module.exports = router;
