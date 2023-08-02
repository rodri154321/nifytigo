const {allUsers, getCreateUser} = require('../controllers/userController')

const getUsersHandler = async(req,res)=>{

    try {
    
    
    
     const results = await allUsers()  
    
    
    res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error:error.message})
    }}
    
    const getCreateUsers = async(req,res)=>{

        const {name,lastName,email,password,cellPhone,country} = req.body
try {

    const newUser = await getCreateUser(name,lastName,email,password,cellPhone,country)

    res.status(200).json(newUser)
} catch (error) {
res.status(400).json({error:error.message = 'No se creo el usuario'})
}
    }


    module.exports = {
        getUsersHandler,
        getCreateUsers,
    }