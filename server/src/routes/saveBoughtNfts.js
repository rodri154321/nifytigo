const { Router } = require("express");

const router = Router();

const { saveBoughtNFT, getSaveBoughtNFT}= require('../handlers/saveBoughtNFT')


router.post('/', saveBoughtNFT);
router.get("/:id", getSaveBoughtNFT)


module.exports = router