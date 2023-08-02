const { Router } = require('express');

const videoGamesRouter = Router();

const  {getAllVideogames} = require ("../handlers/videoGamesHandlers")

videoGamesRouter.get("/", getAllVideogames )


module.exports = videoGamesRouter;

