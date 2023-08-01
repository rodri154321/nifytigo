const {allUsers} = require('../controllers/userController')

const getUsersHandler = async(req,res)=>{
    try {
        
        const allUser = allUsers()

    res.status(201).send(allUser)

    } catch (error) {
        res.status(500).json({error: error.message}) 
    
    }}
    

    module.exports = {
        getUsersHandler,
     
    }