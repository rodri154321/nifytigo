const { allNftsIdTrue, allNftsFalse,allNftsTrue, putShopNft, allNft, createNft, deleteNft, updateNftDescription, getNftById } = require('../controllers/nftController')
const {nftPurchaseNotificationn} = require('../nodemailer/userNodemailer')




const getNftHandler = async (req, res) => {

    const { name } = req.query;

    try {
        if (name) {
            console.log(name);
            const nfts = await allNft(name);
            return res.status(200).json(nfts)
        }
        const nfts = await allNft();
        res.status(200).json(nfts)

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const postNftHandler = async (req, res) => {
 /*   const {email} = req.params
    console.log("EMAIL = ", email);*/
    
    const { iduser,shop, name,  description, image, price, categorie } = req.body;
    try {
        const response = await createNft(iduser,shop, name, description, image, price, categorie);

       // const usuarioEmail = email;
        // const nombreUsuario = '[nombre del usuario]';
      //  const nombreNFT = response.name;

       // await nftPurchaseNotificationn(usuarioEmail, nombreNFT)

        res.status(201).json(response);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
}

const nftbyID = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const nft = await getNftById(id);
        res.status(200).json(nft);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}

const updateNftHandler = async (req, res) => {

    const { description } = req.body;
    const { id } = req.params;

    try {
        const response = await updateNftDescription(id, description);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const deleteNftHandler = async (req, res) => {

    const { id } = req.params;
    //por que estaba descripcion como argumento ?
    try {
        const response = await deleteNft(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const uptadeNftShop = async(req,res)=>{
    const {id} = req.params;
   const {userid, price} = req.body;
    try {
        const response = await putShopNft(id, userid, price)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getNftTrueHandler = async(req,res)=>{
  
    try {
        const response = await allNftsTrue()
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getNftTrueIdHandler = async (req,res)=>{

  try {
    const response = await allNftsTrue()
    res.status(200).json(response)

} catch (error) {
    res.status(400).json({ error: error.message });
}
}

const getNftFalseHandler = async(req,res)=>{
    try {
        const response = await allNftsFalse()
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}
module.exports = {
    getNftHandler,
    postNftHandler,
    deleteNftHandler,
    updateNftHandler,
    nftbyID,
    uptadeNftShop,
    getNftTrueHandler,
    getNftFalseHandler,
    getNftTrueIdHandler 
}

//hare una ruta sencilla
//la cual solo se encargara que depende del ID del usuario cambiara el shop de false a true


//porque no se crean las nftc