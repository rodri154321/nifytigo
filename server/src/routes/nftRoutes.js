const { Router } = require("express");

const router = Router();

const { getNftHandler,
    postNftHandler, 
    nftbyID, 
    deleteNftHandler, 
    updateNftHandler,
    
    uptadeNftShop,
    getNftTrueHandler,
  
    getNftFalseHandler
}= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/create/:email', postNftHandler)
.get("/:id", nftbyID)
.delete('/delete/:id', deleteNftHandler)

.put('/:id', uptadeNftShop)

.put('/update/:id', updateNftHandler)
.put('/:id', uptadeNftShop)
.get('/nfts/true',getNftTrueHandler)


.get('/nfts/false',getNftFalseHandler)
module.exports = router;
