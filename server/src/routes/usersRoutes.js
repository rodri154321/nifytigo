const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    deleteUsersHandler
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
.post('/', createUsersHandler)
.delete('/:id', deleteUsersHandler)
module.exports = router;
