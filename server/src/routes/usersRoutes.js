const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
<<<<<<< HEAD
    getUserIdHandler,
    updateUserHandler
=======
    deleteUsersHandler,
    getDeleteUsersnameHandler,
    getIdUsersHandler
>>>>>>> 5e327a35869e4fb199b3bfabdfec4e5c775acc21
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
<<<<<<< HEAD
.get('/:id', getUserIdHandler)
.post('/', createUsersHandler)
.put('/update/:id', updateUserHandler)
=======
.get('/:id', getIdUsersHandler)
.post('/', createUsersHandler)
.delete('/:id', deleteUsersHandler)
.delete('/', getDeleteUsersnameHandler) 
>>>>>>> 5e327a35869e4fb199b3bfabdfec4e5c775acc21

module.exports = router;
