const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    deleteUsersHandler,
    getDeleteUsersHandler
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
.post('/', createUsersHandler)
.delete('/:id', deleteUsersHandler)
.delete('/', getDeleteUsersHandler)

module.exports = router;
