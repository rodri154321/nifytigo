const { Router } = require("express");

const router = Router();

const { getShopCart,postNftCart,getUserCart,deleteNftCart,updateCartHandler }= require('../handlers/shopCartHandler')


router
.get('/cart/:id', getUserCart)
.post('/add',postNftCart)
.get('/carti/:id', getShopCart)

.put('/complete', updateCartHandler)

.delete("/delete",deleteNftCart)

module.exports = router;

//crear una ruta donde se rendericen las nfts pero por usuario
