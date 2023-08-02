const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
}= require('../handlers/usersHandler')


router.get('/', getUsersHandler)

module.exports = router;
