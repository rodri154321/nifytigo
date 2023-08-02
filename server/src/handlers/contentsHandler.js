const {allContents, createContent} = require('../controllers/contentsController')


const getContentsHandler = async(req,res)=>{

    try {
        const contents = allContents();
    res.status(200).send(contents)

    } catch (error) {
        res.status(500).json({error: error.message}) 
    
    }}

    const postContentsHandler = async(req,res)=>{

        const {iduser, name, description, image, price} = req.body;

    try {
        const response = await createContent(iduser,name, description, image, price);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    }
    

    module.exports = {
        getContentsHandler,
        postContentsHandler
    }
