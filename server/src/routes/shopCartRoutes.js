const { Router } = require("express");

const router = Router();

const { getShopCart,postNftCart,getUserCart,deleteNftCart }= require('../handlers/shopCartHandler')


router
.get('/cart/:id',  getUserCart )

.post('/add',postNftCart)

.get('/carti',getShopCart)

.delete("/delete",deleteNftCart)

module.exports = router;

