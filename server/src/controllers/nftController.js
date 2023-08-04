const { nfts, users } = require('../db');


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
        price: nft.price
      });
  } catch (error) {
    throw new Error('Error retrieving NFT');
  }
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




module.exports = { allNft, createNft, deleteNft, updateNftDescription, getNftById };
