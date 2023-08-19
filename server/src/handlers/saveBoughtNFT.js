const { nftsComprada } = require('../db.js');
const {nftsCompradas, getnftsCompradas} = require("../controllers/nftsCompradasController.js")

const saveBoughtNFT = async (req, res) => {
  const { userId, nftId } = req.body;

  try {
    const boughtNFT = await nftsCompradas( userId, nftId);
    res.status(201).json({ message: 'NFT bought successfully', boughtNFT });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error buying NFT' });
  }
};

const getSaveBoughtNFT = async (req, res) => {
  const {id} = req.params
  try {
    const results = await getnftsCompradas(id);
    res.status(200).json(results)
  } catch (error) {
    res.status(666).json({ error: error.message})
  } 
}

module.exports = {
    saveBoughtNFT,
    getSaveBoughtNFT
}


