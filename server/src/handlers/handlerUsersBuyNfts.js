const {postBuyNft, getBuyNfts}= require('../controllers/buyUserNftcontroller')

const postUsersBuyNfts = async(req,res)=>{
    const { userId,  nftId} = req.body;

    try {
        const postBuy = await postBuyNft(userId, nftId);
        res.status(200).json(postBuy);
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

const getUsersBuyNfts = async(req,res)=>{
    const {id} = req.params
try {
   const myBuy = await getBuyNfts(id)
    res.status(200).json(myBuy)

} catch (error) {
    res.status(400).json({ error: error.message })

}
}

module.exports={postUsersBuyNfts,getUsersBuyNfts}