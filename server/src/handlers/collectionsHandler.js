
const getCollectionsHandler = async(req,res)=>{
    try {
        
        const allCollections = 'ruta collections'

    res.status(201).send(allCollections)

    } catch (error) {
        res.status(500).json({error: error.message}) 
    
    }}
    

    module.exports = {
        getCollectionsHandler,
    
    }
