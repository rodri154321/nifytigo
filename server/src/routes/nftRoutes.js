const { Router } = require("express");

const router = Router();

const { getNftHandler,postNftHandler, deleteNftHandler, updateNftHandler }= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/create', postNftHandler)
.delete('/delete/:id', deleteNftHandler)
.put('/update/:id', updateNftHandler)


module.exports = router;
