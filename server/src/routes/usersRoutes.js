const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    deleteUsersHandler,
    getDeleteUsersHandler,
    getIdUsersHandler
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
.get('/:id', getIdUsersHandler)
.post('/', createUsersHandler)
.delete('/:id', deleteUsersHandler)
.delete('/username', getDeleteUsersHandler) 

module.exports = router;
