const {usersById,searchUsersnameByName,deleteUsersById, allUsers, createUser,findUserName, deleteSearchName,uptadeUser } = require('../controllers/userController')
//const { allUsers, createUser, findUserName, getUserId, updateUser } = require('../controllers/userController')
// const WelcomeEmail = require('../nodemailer/userNodemailer')
// const useNodemailer = require('../nodemailer/userNodemailer')

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
        // const userEmail = newUser.email
        // await WelcomeEmail(userEmail)

        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message = 'No se creo el usuario' })
    }
}

const getUserNameHandler = async (req, res) => {

    const { username, password } = req.body
    try {

        const UserName = await findUserName(username, password)
        res.status(200).json(UserName)

    } catch (error) {
        res.status(400).json({ error: error })
    }
}



const updateUserHandler = async (req, res) => {
    try {
    const { id } = req.params
    const { username, name, lastName, email, password, cellPhone, country } = req.body
        const user = await updateUser(id, username, name, lastName, email, password, cellPhone, country);
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: 'No se pudo actualizar el Usuario' });
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

const getDeleteUsersnameHandler=async (req,res)=>{
 const {username} = req.body
    try {

        
        const results =  await deleteSearchName({username})

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
    getDeleteUsersnameHandler,
    getIdUsersHandler,
    updateUserHandler
}