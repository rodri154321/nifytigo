<<<<<<< HEAD
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
=======
const {nfts, user} = require('../db.js');

const allNft = async ()=>{
    const allNftDb = await nfts.findAll({
        include: {
          model: user,
          attributes: ["name"],
        },
      });
      return allNftDb;
    };
    
const createNft = async (iduser, name, description, image, price)=>{

    const newNft= await nfts.create({name, description, image, price});
    await newNft.setUser(iduser);
    return newNft;
>>>>>>> 7637825cfe44283dafb1404762180174f6b600b4
};

const createNft = async (iduser, name, description, image, price) => {
  const newNft = await nfts.create({ name, description, image, price });
  console.log(newNft);
  await newNft.setUser(iduser);
  return newNft;
};

module.exports = { allNft, createNft };
