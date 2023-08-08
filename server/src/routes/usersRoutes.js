const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    deleteUsersHandler,
    getDeleteUsersnameHandler,
    getIdUsersHandler
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
.get('/:id', getIdUsersHandler)
.post('/', createUsersHandler)
.delete('/:id', deleteUsersHandler)
.delete('/', getDeleteUsersnameHandler) 

module.exports = router;
