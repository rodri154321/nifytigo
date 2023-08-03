const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler
}= require('../handlers/usersHandler')


router
.get('/all', getUsersHandler)
.get('/username', getUserNameHandler)
router.post('/', createUsersHandler)

module.exports = router;
