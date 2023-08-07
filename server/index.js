const server = require("./src/server");
const { conn } = require("./src/db");
const PORT = 3001;
<<<<<<< HEAD

conn.sync({ force : false }).then(() => {
=======
           //alter
conn.sync({ alter: true }).then(() => {
>>>>>>> develop
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
    }).catch(error => console.error(error))