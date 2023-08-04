const { nfts, users } = require('../db');
const { Op } = require('sequelize');

const allNft = async () => {
  const allNftsDb = await nfts.findAll({
    include: {
      model: users,
      attributes: ["name"],
    },
  });

  return allNftsDb;
};

const createNft = async (iduser, name, description, image, price) => {
  const newNft = await nfts.create({ name, description, image, price });
  console.log(newNft);
  await newNft.setUser(iduser);
  return newNft;
};
const getNftById = async (id) => {
  try {
    const nft = await nfts.findByPk(id);
    // console.log(id); 
    console.log(nft);
    return (
      {
        id: nft.id,
        name: nft.name,
        description: nft.description,
        image: nft.image,
        price: nft.price});
  } catch (error) {
    throw new Error('Error retrieving NFT');
  }
};



module.exports = { allNft, createNft, getNftById };
