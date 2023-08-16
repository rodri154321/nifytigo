const { buys,users, nfts } = require('../db.js');

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
        model: nfts,
        attributes: ["id","name","image","price"],
        through: { attributes: [] }
  
      },
    });
    
  let totalPrice = 0.00
  console.log(Number(buyResults.price))
  for(const nft of buyResults.nfts){
      totalPrice += Number(nft.price)
  }
  console.log(totalPrice)
  
  //let totalPrice = Number(buyResults.price) + buyResults.nfts.map(pr => Number(pr.price))  
  
  //let totalPrice = Number(cartResults.price) + Number(cartResults.nfts[0].price)
  console.log(buyResults.price)
    await  buys.update({price: totalPrice}, {where:{id:buyShop.id}})
    const buyShops = await buys.findByPk(buyShop.id,{
      include: {
        model: nfts,
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

//creare el modelo delas compras de los distintos tipos de usuarios junto con sus nfts
module.exports={postBuyNft, getBuyNfts}
