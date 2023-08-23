const { Router } = require("express");

const router = Router();

const { saveBoughtNFT, getSaveBoughtNFT}= require('../handlers/saveBoughtNFT')


router.post('/profile', saveBoughtNFT);
router.get("/profile/:id", getSaveBoughtNFT)


module.exports = router