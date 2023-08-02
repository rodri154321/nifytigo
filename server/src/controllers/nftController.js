const {contents, user} = require('../db.js');

const allNft = async ()=>{
    const allContentsDb = await contents.findAll({
        include: {
          model: user,
          attributes: ["name"],
        },
      });
      return allContentsDb;
    };
    
const createNft = async (iduser, name, description, image, price)=>{

    const newContent = await contents.create({name, description, image, price});
    await newContent.addUser(iduser);
    return newContent;
};
    
    module.exports = {allNft,createNft}
