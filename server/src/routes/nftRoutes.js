const { Router } = require("express");

const router = Router();

const {getNftTrueIdHandler,getNftFalseHandler,getNftTrueHandler, uptadeNftShop, getNftHandler,postNftHandler, nftbyID, deleteNftHandler, updateNftHandler }= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/create', postNftHandler)
.get("/:id", nftbyID)
.delete('/delete/:id', deleteNftHandler)
.put('/update/:id', updateNftHandler)
.put('/:id', uptadeNftShop)
.get('/nfts/true',getNftTrueHandler)
.get('/nfts/true/userid',getNftTrueIdHandler)

.get('/nfts/false',getNftFalseHandler)
module.exports = router;
