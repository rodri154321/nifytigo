const { Router } = require("express");

const router = Router();

const {
    getCollectionsHandler,

}= require('../handlers/collectionsHandler')


router.get('/', getCollectionsHandler)


module.exports = router;
