const { allNft, createNft, getNftById } = require('../controllers/nftController')


const getNftHandler = async (req, res) => {

    try {
        const nfts = await allNft();
        console.log(nfts);
        res.status(200).json(nfts)

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const postNftHandler = async (req, res) => {

    const { iduser, name, description, image, price } = req.body;

    try {
        const response = await createNft(iduser, name, description, image, price);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const nftbyID = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const nft = await getNftById( id );
        res.status(200).json(nft);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}
module.exports = {
    nftbyID,
    getNftHandler,
    postNftHandler
}
