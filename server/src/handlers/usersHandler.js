const {usersById,searchUsersnameByName,deleteUsersById, allUsers, createUser,findUserName } = require('../controllers/userController')

const getUsersHandler = async (req, res) => {
const {username} = req.query
    try {

        
        const results = username
        
       ? await searchUsersnameByName({username}): await allUsers()

        res.status(200).json(results)
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getIdUsersHandler = async(req,res)=>{
    const {id} = req.params
try {
    const usersId = await usersById(id);
    
res.status(200).json(usersId)
 
} catch (error) {
    res.status(400).json({error: error.message}) 

}
}
  

const createUsersHandler = async (req, res) => {

    const { username, name, lastName, email, password, cellPhone, country } = req.body
    try {

        const newUser = await createUser(username, name, lastName, email, password, cellPhone, country)

        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message = 'No se creo el usuario' })
    }
}

const getUserNameHandler = async (req, res) => {

    const {username,password} = req.body
    try {

        const UserName = await findUserName(username,password)
        res.status(200).json(UserName)

    } catch (error) {
        res.status(400).json({ error: error})
    }
}

const deleteUsersHandler = async(req, res)=>{
    const {id}= req.params
try {
    const usersDelete = await deleteUsersById(id);
    
res.status(200).json(usersDelete)

} catch (error) {
    res.status(400).json({error: error.message})

}
}

const getDeleteUsersHandler= async()=>{
    try {

     const results = 'funciona?'
        res.status(200).json(results)
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 
}

module.exports = {
    getUsersHandler, 
    createUsersHandler,
    getUserNameHandler, 
    deleteUsersHandler,
    getDeleteUsersHandler,
    getIdUsersHandler
}