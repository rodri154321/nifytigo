const { Router } = require("express");

const router = Router();

const { getNftHandler,postNftHandler, deleteNftHandler }= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/create', postNftHandler)
.delete('/delete/:id', deleteNftHandler)


module.exports = router;
