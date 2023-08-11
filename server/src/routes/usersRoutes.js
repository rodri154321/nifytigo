const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    updateUserHandler,
    deleteUsersHandler,
    getDeleteUsersnameHandler,
    getIdUsersHandler,
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
.post('/username', getUserNameHandler)
.post('/', createUsersHandler)
.put('/update/:id', updateUserHandler)
.get('/:id', getIdUsersHandler)
.delete('/:id', deleteUsersHandler)
.delete('/', getDeleteUsersnameHandler) 
 
module.exports = router;
