const { nftsComprada } = require('../db');

const saveBoughtNFT = async (req, res) => {
    const userId = req.params.userId;
    const nftId = req.body.nftId; // Asume que el cliente enviará el ID de la NFT
  
    try {
      const boughtNFT = await nftsComprada.create({
        userId,
        nftId,
        // Agrega otras propiedades relevantes según tus necesidades
      });
  
      res.status(201).json({ message: 'NFT bought successfully', boughtNFT });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error buying NFT' });
    }
  };
  
  module.exports = {
    saveBoughtNFT,
  }