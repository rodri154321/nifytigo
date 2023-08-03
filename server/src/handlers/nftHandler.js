const { allNft, createNft, deleteNft, updateNftDescription } = require('../controllers/nftController')


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

const deleteNftHandler = async (req, res) => {
    const {id} = req.params;
    console.log( id);
    try {
        const deleted = await deleteNft(id);
        if (!deleted) {
            res.status(404).json({ error: 'No se encontró la NFT con ese ID' });
        } else {
            res.status(200).json({ message: 'La NFT se eliminó con éxito' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al intentar eliminar la NFT' });
    }
}

const updateNftHandler = async (req, res) => {
    const {id} = req.params;
    const { description } = req.body;
  
    try {
      const updatedNft = await updateNftDescription(id, description);
      res.status(200).json(updatedNft);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



module.exports = {
    getNftHandler,
    postNftHandler,
    deleteNftHandler,
    updateNftHandler
}
