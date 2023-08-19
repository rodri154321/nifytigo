const { buys,users, nftsPurchase } = require('../db.js');

const getBuysController = async (userId) => {
  const buyShop = await buys.findOne({ where: { userId: userId, status: "pending" } })
  if (buyShop === null) {
      const newBuy = await createShopBuy(userId)
      return newBuy
  }
  return buyShop;}

const postBuyNft = async(userId,nftId)=>{
  const addBuy = await getBuysController(userId)
  await addBuy.addNft(nftId)
  return addBuy
}
const createShopBuy = async (userId) => {
  const newBuy = await buys.create({ status: "pending" })

  await newBuy.setUser(userId)
  return newBuy

}
const getBuyNfts = async(userId) =>{
  const buyShop = await  getBuysController(userId)

  const buyResults = await buys.findByPk(buyShop.id,{
      include: {
        model: nftsPurchase,
        attributes: ["id","name","image","price"],
        through: { attributes: [] }
  
      },
    });
    
  let totalPrice = 0.00
  console.log(Number(buyResults.price))
  for(const nftsPurchase of buyResults.nftsPurchase){
      totalPrice += Number(nftsPurchase.price)
  }
  console.log(totalPrice)
  
  //let totalPrice = Number(buyResults.price) + buyResults.nfts.map(pr => Number(pr.price))  
  
  //let totalPrice = Number(cartResults.price) + Number(cartResults.nfts[0].price)
  console.log(buyResults.price)
    await  buys.update({price: totalPrice}, {where:{id:buyShop.id}})
    const buyShops = await buys.findByPk(buyShop.id,{
      include: {
        model: nftsPurchase,
        attributes: ["id","name","image","price"],
        through: { attributes: [] }
      },
    });
  return buyShops
   
}


//una ves que se compre el nft se  debe 
//guardar el userId de quien lo compro
//junto con el nftComprado.


//debemos pasarle un userId el cual es el usuario como tal y el
//id del Nft el cual es el producto que comprara por medio del Id.
//Al darle send debe aparecer una tabla en donde este guardado simple y llanamente el id del usuario junto con el id del nft

//creare el modelo de las compras de los distintos tipos de usuarios junto con sus nfts



 //paypal
 //necesita una ruta para que guarde la nft que compro, y la guarde como un registro de compras de lo que a echo
 //el carrito es para guardar lo que queremos comprar y la ruta paypal va a ser para que se guarde el nft comprado,
 //hacer una ruta la cual renderice el nft comprado y esa ruta la mostraremos en el profile
 //carrito
 //local storage



 //se debe hacer una ruta en donde cauando se compre el nft tambien se elimine el nft de host manteniendo su presencia 
 //en las compras de los nfts del usuario

//Pasos
 //Crear un nuevo modulo (o)
 //Hcaer las relaciones
 //Crear rutas
 //Implementar la logica:
 //Cuando se le de comprar a paypal se borrara aquella NFT de el home.

//colocar un destroy del NFT subiendo aquel NFT borrado a Buy NFT

//Porque no lo implementamos solo en el front?
//por el echo de que cuando se compra una NFT al mismo tiempo que se elimina, pues dejam de existir tanto en el fron como
//en el profile
//yo lo que debo hacer es que cuando se eliminen los nfts de el home llegue a profile
module.exports={postBuyNft, getBuyNfts}
