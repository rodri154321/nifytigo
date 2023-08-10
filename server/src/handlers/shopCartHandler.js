const {getShopCartController, addNftCart, getMyCart,  deleteCartNft}= require('../controllers/shopCartControllers')

const getShopCart = async (req, res) => {
    const {userId}= req.body
try {
const result=await getShopCartController(userId)

    res.status(200).json(result)

} catch (error) {
            res.status(400).json({ error: error.message });

}

}

const postNftCart = async(req,res)=>{
const {nftId,userId}= req.body
try {
    const addNft = await addNftCart(nftId,userId)
    res.status(200).json(addNft)
} catch (error) {
    res.status(400).json({ error: error.message });

}
}

const getUserCart = async(req,res)=>{
    const {userId} = req.body
try {
    const myCart = await getMyCart(userId)
    res.status(200).json(myCart)
} catch (error) {
    res.status(400).json({ error: error.message });

}
}

const deleteNftCart = async(req,res)=>{
    const {cartId, nftId, userId} = req.body
try {
    const deleteNft = await deleteCartNft(cartId,nftId,userId)
    res.status(200).json(deleteNft)
} catch (error) {
    res.status(400).json({ error: error.message });

}
}


module.exports = {getShopCart, postNftCart,getUserCart,deleteNftCart}
