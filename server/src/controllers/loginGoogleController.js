const { log } = require("console");
const { users } = require("../db.js");

const postLoginGoogle = async (email, googleId, name) => {
    console.log("EMAIL", email, "GOOGLEID", googleId, "NAME", name);

    const existingUser = await users.findOne({ where: { email: email } })
  
    console.log("existe? ",existingUser);
    if (existingUser !== null) {
        return existingUser
    } else {
      // El usuario no existe, puedes crearlo
      const newgUser = await users.create({ email: email, name:name, password: googleId, cellPhone: "-", country: "-",username: "-",lastName: "-" })
      return newgUser
    }


    // try {
    //     const newuser = await users.findOrCreate({
    //         where: { email: email },
    //         defaults: {
    //             name: name,
    //             email: email,
    //             password: googleId,
    //             cellPhone: "",
    //             country: "",
    //             username: "",
    //             lastName: "",
    //         },
    //     });

    //     // Devuelve el nuevo usuario creado o el usuario existente
    //     return newuser[0];
    // } catch (error) {
    //     console.error("Error al crear/buscar usuario:", error);
    //     throw error;
    // }
};

module.exports = {
    postLoginGoogle
};
