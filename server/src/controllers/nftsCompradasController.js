const { nftsComprada, nfts, users } = require('../db.js');

const nftsCompradas = async ( userId, nftId) => {
  try {
    const boughtNFT = await nftsComprada.create({
      userId,
      nftId
    });

// Usa el método setNft para establecer la asociación


    return boughtNFT;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating bought NFT');
  }
};

const getnftsCompradas = async (id) => {
  const allNftsCompradas = nftsComprada.findByPk(id)
  return allNftsCompradas
}

module.exports = {
 nftsCompradas,
 getnftsCompradas 
};