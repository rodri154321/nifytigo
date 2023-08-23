const { Router } = require("express");

const router = Router();

const { getNftHandler,
    postNftHandler, 
    nftbyID, 
    deleteNftHandler, 
    updateNftHandler,
    
    uptadeNftShop,
    getNftTrueHandler,
    getNftTrueIdHandler,
    getNftFalseHandler
}= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/create/:email', postNftHandler)
.get("/:id", nftbyID)
.delete('/delete/:id', deleteNftHandler)

.put('/:id', uptadeNftShop)

.put('/update/:id', updateNftHandler)

.get('/nfts/true',getNftTrueHandler)

.get('/nfts/true/:userId',getNftTrueIdHandler)

.get('/nfts/false',getNftFalseHandler)
module.exports = router;
