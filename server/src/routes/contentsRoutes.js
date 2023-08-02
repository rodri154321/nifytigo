const { Router } = require("express");

const router = Router();

const { getContentsHandler,postContentsHandler }= require('../handlers/contentsHandler')


router
.get('/', getContentsHandler)
.post('/', postContentsHandler)


module.exports = router;
