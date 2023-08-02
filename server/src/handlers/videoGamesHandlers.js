

const {allVideoGames} = require("../controllers/videoGamesController")

const getAllVideogames = async (req, res) => {
    try {
      const videoGames = await allVideoGames();
      res.status(200).json(videoGames);
    } catch (error) {
        res.status(404).json({ error: "Error al obtener los videojuegos" });
    }
  };
module.exports = {getAllVideogames}