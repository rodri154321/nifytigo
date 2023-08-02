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
};
    
    module.exports = {allNft,createNft}
