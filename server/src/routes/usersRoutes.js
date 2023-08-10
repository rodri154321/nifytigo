const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    deleteUsersHandler,
    getIdUsersHandler,
    updateUserHandler
}= require('../handlers/usersHandler')


router
.get('/', getUsersHandler)
.get('/username', getUserNameHandler)
.get('/:id', getIdUsersHandler)
.post('/', createUsersHandler)
.delete('/:id', deleteUsersHandler)
.post('/', createUsersHandler)
.put('/update/:id', updateUserHandler)

module.exports = router;
