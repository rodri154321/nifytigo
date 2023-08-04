const { nfts, users } = require('../db');
const { Op } = require('sequelize');

const allNft = async (name) => {
  const allNftsDb = await nfts.findAll({
       include: {
      model: users,
      attributes: ["name"],
    },
  });
  if (name) {
    
    let filterNft = allNftsDb.filter((nft) => 
      nft.name.toLowerCase().includes(name.toLowerCase()));
    //validacion para que no devuelva un array u objeto vacio 

    if (!filterNft.length)
      throw new Error(`No se encontro el juego con el nombre ${name}`);
    return filterNft;
  }
  return allNftsDb;
};

const createNft = async (iduser, name, description, image, price) => {
  const newNft = await nfts.create({ name, description, image, price });
  console.log(newNft);
  await newNft.setUser(iduser);
  return newNft;
};

module.exports = { allNft, createNft };
