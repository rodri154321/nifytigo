const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    getUserIdHandler
}= require('../handlers/usersHandler')


router
.get('/all', getUsersHandler)
.get('/username', getUserNameHandler)
.get('/:id', getUserIdHandler)
.post('/', createUsersHandler)

module.exports = router;
