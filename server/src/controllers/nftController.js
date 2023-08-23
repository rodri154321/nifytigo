

//hare una ruta sencilla
//la cual solo se encargara que depende del ID del usuario cambiara el shop de false a true
const { nfts, users, categories } = require('../db.js');


const allNft = async (name) => {
  const allNftsDb = await nfts.findAll({where:{shop: false}},{
    include: [{
      model: users,
      attributes: ["name"],
    },
    {
      model: categories,
      as: 'categories', // Usa el alias definido en el modelo
      attributes: ["name"],
      through: { attributes: [] },
    }]
  });

  if (name) {
    
    let filterNft = allNftsDb.filter((nft) => 
      nft.name.toLowerCase().includes(name.toLowerCase()));
    //validacion para que no devuelva un array u objeto vacio 

    if (!filterNft.length)
      throw new Error(`No se encontro el Nft con el nombre ${name}`);
    return filterNft;
  }
  return allNftsDb;
};


const createNft = async (iduser, shop ,name, description, image, price, cate) => {
  const customCreatedAt = new Date();
  const newNft = await nfts.create({ name,shop, description, image, price, customCreatedAt });
  await newNft.setUser(iduser);
  for (const cateName of cate) {

    
    const cat = await categories.findOne({ where: { name: cateName } });
    
    if (cat) {     
      await newNft.addCategories(cat);
    }
  }
  return newNft;
};


const getNftById = async (id) => {
  try {
    
    const nft = await nfts.findByPk(id,{include: [{
      model: users,
      attributes: ["name","id"],
    },
    {
      model: categories,
      as: 'categories', // Usa el alias definido en el modelo
      attributes: ["name"],
      through: { attributes: [] },
    }],});
    if(nft.shop === false){
    return (
      {

        id: nft.id,
        shop: nft.shop,
        name: nft.name,
        description: nft.description,
        image: nft.image,
        price: nft.price,
        user:nft.user.name,
        userid: nft.userid,
        categories: nft.categories
      })}
  {return`se seteo`;}
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

const putShopNft = async (nftId,userid, price) => {
  try {
      // Buscar el NFT por ID
      const nft = await nfts.findByPk(nftId);

      if (nft) {
          // Actualizar el valor de 'shop' a true
          await nft.update({ shop: true, userId: userid, price:price });

          // Obtener la información actualizada del NFT
          return await getNftById(nftId);
      } else {
          throw new Error('NFT not found');
      }
  } catch (error) {
      throw new Error('Error updating NFT');
  }
};



const allNftsTrue = async()=>{
  const allNftsDb = await nfts.findAll({where:{shop: true},})
return allNftsDb

}

const allNftsFalse = async()=>{
  const allNftsDb = await nfts.findAll({where:{shop: false}})
return allNftsDb

}


const allNftsIdTrue = async(userId)=>{
 // const userNft = await nfts.findByPk(userId);
  const allNftsDb = await nfts.findAll({where:{shop: true, userId: userId}})

return allNftsDb
}
module.exports = {allNftsIdTrue, allNftsFalse,allNftsTrue ,putShopNft,allNft, createNft, deleteNft, updateNftDescription, getNftById };
