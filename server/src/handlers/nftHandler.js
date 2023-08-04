const { allNft, createNft } = require('../controllers/nftController')


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

    const { iduser, name, description, image, price } = req.body;

    try {
        const response = await createNft(iduser, name, description, image, price);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    getNftHandler,
    postNftHandler
}
