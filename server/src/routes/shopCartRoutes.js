const { Router } = require("express");

const router = Router();

const { getShopCart,postNftCart,getUserCart,deleteNftCart }= require('../handlers/shopCartHandler')


router
.get('/cart/:id', getUserCart)
.post('/add',postNftCart)
.get('/carti', getShopCart)
.delete("/delete",deleteNftCart)
module.exports = router;



 //paypal
 //necesita una ruta para que guarde la nft que compro, y la guarde como un registro de compras de lo que a echo
 //el carrito es para guardar lo que queremos comprar y la ruta paypal va a ser para que se guarde el nft comprado,
 //hacer una ruta la cual renderice el nft comprado y esa ruta la mostraremos en el profile
 //carrito
 //local storage