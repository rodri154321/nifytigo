const { Router } = require('express');
const router = Router();
const { getNftHandler, postNftHandler } = require('../handlers/nftHandler');


router.get('/', getNftHandler);
router.post('/create', postNftHandler);


module.exports = router;
