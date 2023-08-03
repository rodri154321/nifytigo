const { allUsers, createUser,findUserName } = require('../controllers/userController')

const getUsersHandler = async (req, res) => {

    try {
        const results = await allUsers()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
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


module.exports = {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler
}