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


const deleteNft = async (id) => {
  const deleteNft = await nfts.destroy({where: { id: id} });
  return deleteNft;
};


const updateNftDescription = async (id, description) => {
  const nft = await nfts.findByPk(id);
  if (!nft) {
    throw new Error('No se encontró la NFT con ese ID');
  }

  nft.description = description;
  await nft.save();

  return nft;
};




module.exports = { allNft, createNft, deleteNft, updateNftDescription };
