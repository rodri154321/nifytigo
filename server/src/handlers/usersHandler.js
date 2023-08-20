const { getUserId, searchUsersnameByName, deleteUsersById, allUsers, createUser, findUserName, deleteSearchName, updateUser,searchUserNft, grantAdminAcces } = require('../controllers/userController')
const WelcomeEmail = require('../nodemailer/userNodemailer')

const getUsersHandler = async (req, res) => {
    const { username } = req.query
    try {
        const results = username
            ? await searchUsersnameByName({ username }) : await allUsers()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createUsersHandler = async (req, res) => {
    const { username, name, lastName, email, password, cellPhone, country, admin, image } = req.body;
    try {
        const newUser = await createUser(username, name, lastName, email, password, cellPhone, country, admin, image);

        const userEmail = newUser.email;
        const nameuser = newUser.name;
        await WelcomeEmail(userEmail, nameuser);
        
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserNameHandler = async (req, res) => {
    const { username, password } = req.method === 'GET' ? req.query : req.body;
    try {
      const isAuthenticated = await findUserName(username, password);
      if (isAuthenticated) {
        res.status(200).json({ authenticated: true });
      } else {
        res.status(401).json({ authenticated: false });
      }
    } catch (error) {
      res.status(401).json({ authenticated: false, error: error.message });
    }
  };

const getIdUsersHandler = async (req, res) => {
    const { id } = req.params
    try {
        const usersId = await getUserId(id);

        res.status(200).json(usersId)

    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

const grantAdminAccesHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const adminUser = await grantAdminAcces(id)
        if (!adminUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        adminUser.admin = !adminUser.admin;
        await adminUser.save();

        const message = adminUser.admin
        ? 'Acceso de administrador otorgado con éxito'
        : 'Acceso de administrador revocado con éxito';

        return res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
}

const updateUserHandler = async (req, res) => {
    try {
        const { id } = req.params
        const { username, name, lastName, image, password, cellPhone, country, admin } = req.body
        const user = await updateUser(id, username, name, lastName, image, password, cellPhone, country, admin);
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: 'No se pudo actualizar el Usuario' });
    }
}

const deleteUsersHandler = async (req, res) => {
    const { id } = req.params
    try {
        const usersDelete = await deleteUsersById(id);
        res.status(200).json(usersDelete)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

const getDeleteUsersnameHandler = async (req, res) => {
    const { username } = req.body
    try {
        const results = await deleteSearchName({ username })
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getNftsUsersHandler = async(req, res) =>{
    const {id}= req.params
    try {
        const results = await searchUserNft(id)
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
    updateUserHandler,
    getNftsUsersHandler,
    grantAdminAccesHandler
}