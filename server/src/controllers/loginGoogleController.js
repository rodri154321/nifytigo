const { users } = require("../db.js");

const postLoginGoogle = async (email, googleId, name) => {
    console.log("EMAIL", email, "GOOGLEID", googleId, "NAME", name);

    try {
        const newuser = await users.findOrCreate({
            where: { email: email },
            defaults: {
                name: name,
                email: email,
                password: googleId,
                cellPhone: "sin informacion",
                country: "sin informacion",
                username: "sin informacion",
                lastName: "sin informacion",
            },
        });

        // Devuelve el nuevo usuario creado o el usuario existente
        return newuser[0];
    } catch (error) {
        console.error("Error al crear/buscar usuario:", error);
        throw error;
    }
};

module.exports = {
    postLoginGoogle
};
