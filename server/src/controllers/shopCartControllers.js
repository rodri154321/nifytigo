const { cart, nfts } = require('../db.js');


const getShopCartController = async (userId) => {
    const cartShop = await cart.findOne({ where: { userId: userId, status: "pending" } })
    if (cartShop === null) {
        const newCart = await createShopCart(userId)
        return newCart
    }
    return cartShop;
}

const createShopCart = async (idUser) => {
    const newCart = await cart.create({ status: "pending" })

    await newCart.setUser(idUser)
    return newCart

}

const addNftCart = async (nftId, userId) => {
    const addCart = await getShopCartController(userId)
    await addCart.addNft(nftId)
    return addCart
}

const getMyCart = async(userId)=>{
const cartShop = await  getShopCartController(userId)

const cartResults = await cart.findByPk(cartShop.id,{
    include: {
      model: nfts,
      attributes: ["name","image","price"], 
      through: { attributes: [] }

    },
  });
  
let totalPrice = 0.00
console.log(Number(cartResults.price))
for(const nft of cartResults.nfts){
    totalPrice += Number(nft.price)
}
console.log(totalPrice)

//let totalPrice = Number(cartResults.price) + cartResults.nfts.map(pr => Number(pr.price))  

//let totalPrice = Number(cartResults.price) + Number(cartResults.nfts[0].price)
console.log(cartResults.price)
  await  cart.update({price: totalPrice}, {where:{id:cartShop.id}})
  const cartShops = await cart.findByPk(cartShop.id,{
    include: {
      model: nfts,
      attributes: ["name","price"],
      through: { attributes: [] }
    },
  });
return cartShops
 
}

const  deleteCartNft = async(cartId,nftId,userId)=>{
const carts = await cart.findByPk(cartId)
const nft = await nfts.findByPk(nftId)

await carts.removeNfts(nft)

return 'Eliminado' + nft  
}
//cuando el usuario hace click en el boton de abrir el carrito tendria que pasarnos el id...
// del usuario para buscar el carrito asociado a ese ID
 
module.exports = { getShopCartController, createShopCart, addNftCart,getMyCart, deleteCartNft }

//alt + shift + f   