const { Router } = require('express');
const router = Router();
const { getNftHandler, postNftHandler } = require('../handlers/nftHandler');


router.get('/', getNftHandler);
router.post('/create', postNftHandler);

const { getNftHandler,postNftHandler }= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
router.post('/', postNftHandler)



module.exports = router;
