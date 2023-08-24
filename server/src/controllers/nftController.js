

//hare una ruta sencilla
//la cual solo se encargara que depende del ID del usuario cambiara el shop de false a true
const { nfts, users, categories } = require('../db.js');


const allNftadmin = async () => {
  const allNfts = await nfts.findAll();

  return allNfts;
};

const allNft = async (name) => {
  const nftsQuery = {
    where: { shop: false },
    include: [
      {
        model: users,
        attributes: ["name", "id"],
      },
    ],
  };

 

  const allNftsDb = await nfts.findAll(nftsQuery);

  const nftsWithCategories = await Promise.all(
    allNftsDb.map(async (nft) => {
      const categories = await nft.getCategories({
        attributes: ["name"],
      });

      const userName = nft.user ? nft.user.name : "Usuario Desconocido";
      const userId = nft.user ? nft.user.id : "ID Desconocido";

      return {
        id: nft.id,
        shop: nft.shop,
        name: nft.name,
        description: nft.description,
        image: nft.image,
        price: nft.price,
        customCreatedAt: nft.customCreatedAt,
        active: nft.active,
        user: userName,
        userid: userId,
        categories: categories.map((category) => category.name),
      };
    })
  );
  if (name) {
    
    let filterNft = allNftsDb.filter((nft) => 
      nft.name.toLowerCase().includes(name.toLowerCase()));
    //validacion para que no devuelva un array u objeto vacio 

    if (!filterNft.length)
      throw new Error(`No se encontro el Nft con el nombre ${name}`);
    return filterNft;
  }
  return nftsWithCategories;
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
        userid: nft.user.id,
        categories: nft.categories
      })}
  {return nft;}
  } catch (error) {
    throw new Error('Error retrieving NFT');
  }
};



const deleteNft = async (id) => {
  const deleteNft = await nfts.destroy({where: { id: id} });
  return deleteNft;
};

const nftStatus = async (id) => {
  const nftStatusId = nfts.findByPk(id)
  return nftStatusId;
}


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
  const allNftsDb = await nfts.findAll({where:{shop: true, active:true},})
return allNftsDb

}

const allNftsFalse = async()=>{
  const allNftsDb = await nfts.findAll({where:{shop: false,active:true}})
return allNftsDb

}


const allNftsIdTrue = async(userId)=>{
 // const userNft = await nfts.findByPk(userId);
  const allNftsDb = await nfts.findAll({where:{shop: true, userId: userId,active:true}})

return allNftsDb
}

const putFalseShopNft = async (nftId,userid, price) => {
  try {
      // Buscar el NFT por ID
      const nft = await nfts.findByPk(nftId);

      if (nft) {
          // Actualizar el valor de 'shop' a true
          await nft.update({ shop: false, userId: userid, price:price,active:true });

          // Obtener la información actualizada del NFT
          return await getNftById(nftId);
      } else {
          throw new Error('NFT not found');
      }
  } catch (error) {
      throw new Error('Error updating NFT');
  }
};

const allNftsIdUser = async(userId)=>{
  const allNftsDb = await nfts.findAll({where:{shop: false,userId: userId,active:true}})

  return allNftsDb
}


module.exports = {allNftsIdUser,putFalseShopNft,allNftsIdTrue, allNftsFalse,allNftsTrue ,putShopNft,allNft, createNft, deleteNft, updateNftDescription, getNftById, nftStatus, allNftadmin };
