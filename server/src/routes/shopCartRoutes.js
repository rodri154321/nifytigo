const { Router } = require("express");

const router = Router();

const { getShopCart,postNftCart,getUserCart,deleteNftCart }= require('../handlers/shopCartHandler')


router
.get('/', getShopCart)
.post('/add',postNftCart)
.get('/cart', getUserCart)
.delete("/delete",deleteNftCart)
module.exports = router;

