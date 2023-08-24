const { users } = require("../db.js");

const postLoginGoogle = async (email, googleId, name) => {
    console.log("EMAIL", email, "GOOGLEID", googleId, "NAME", name);

    users.findOne({ where: { email: email } })
  .then(existingUser => {
    if (existingUser) {
      return existingUser
    } else {
      // El usuario no existe, puedes crearlo
      users.create({ email: email, name: name, password: googleId, cellPhone: "", country: "",username: "",lastName: "", })
        .then(newUser => {
          return newUser
        })
        .catch(error => {
            throw new Error(error , "no se pudo acceder")
        });
    }
  })
  .catch(error => {
    throw new Error(error , "no se pudo acceder")
  });


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
