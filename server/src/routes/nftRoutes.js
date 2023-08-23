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
    getNftFalseHandler,
    updateFalseNftHandler,
    getNftsIdUsers,
    nftStatusHandler,
}= require('../handlers/nftHandler')


router
.get('/', getNftHandler)//Muestra todos los NFTS

.put('/active/:id', nftStatusHandler)
.post('/create/:email', postNftHandler)

.get("/:id", nftbyID)

.delete('/delete/:id', deleteNftHandler)

.put('/:id', uptadeNftShop)

.put('/update/:id', updateNftHandler)

.put('/nfts/false/:id', updateFalseNftHandler)
.get('/nfts/true',getNftTrueHandler)

.get('/nfts/true/:userId',getNftTrueIdHandler)

.get('/nfts/false',getNftFalseHandler)
.get('/users/:userId', getNftsIdUsers)
module.exports = router;
