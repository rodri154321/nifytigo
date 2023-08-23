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
    nftStatusHandler
}= require('../handlers/nftHandler')


router
.get('/', getNftHandler)//Muestra todos los NFTS

.put('/active', nftStatusHandler)
.post('/create/:email', postNftHandler)//Esta ruta crea un NFT 
.get("/:id", nftbyID)//Esta ruta busca un NFT por Id
.delete('/delete/:id', deleteNftHandler)//esta ruta elimina un NFT por parametro
.put('/nfts/true/:id', uptadeNftShop)//esta ruta compra los NFTS (o en otras palabras modifica el parametro "shop" en "true")
.put('/update/:id', updateNftHandler)//
.put('/nfts/false/:id', updateFalseNftHandler)//esta ruta convierte los NFTS que tiene el parametro "shop:true" por "shop:false"
.get('/nfts/true',getNftTrueHandler)//esta ruta muestra todas las NFTS con el parametro "shop:true"
.get('/nfts/true/:userId',getNftTrueIdHandler)//esta ruta busca los NFTS que tengan la propiedad "shop:true" por id de usuario
.get('/nfts/false',getNftFalseHandler)//muestra todos los nfts con la propiedad "shop:false"
module.exports = router;
