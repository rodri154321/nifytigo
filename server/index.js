const server = require("./src/server");
const { conn } = require("./src/db");
const PORT = 3001;
<<<<<<< HEAD
           //alter
conn.sync({ force: true }).then(() => {
=======

conn.sync({ force : false }).then(() => {
>>>>>>> ddf6555a7edc71c98909e59ec800817363977b78
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
    }).catch(error => console.error(error))