const { Router } = require("express");

const router = Router();

const { getShopCart,postNftCart,getUserCart,deleteNftCart }= require('../handlers/shopCartHandler')


router
.get('/carti', getShopCart)
.post('/add',postNftCart)
.get('/cart/:id', getUserCart)
.delete("/delete",deleteNftCart)
module.exports = router;

