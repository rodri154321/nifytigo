const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    getCreateUsers
}= require('../handlers/usersHandler')


router.get('/', getUsersHandler)
router.post('/', getCreateUsers)

module.exports = router;
