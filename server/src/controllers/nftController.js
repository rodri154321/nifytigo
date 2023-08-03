const { nfts, users } = require('../db');

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

const deleteNft = async (nftId) => {
  const deleteNft = await nfts.destroy({where: { id: nftId} });
};



module.exports = { allNft, createNft };
