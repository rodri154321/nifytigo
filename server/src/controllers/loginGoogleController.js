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
                cellPhone: "",
                country: "",
                username: "",
                lastName: "",
            },
        });

        // Devuelve el nuevo usuario creado o el usuario existente
        return newuser;
    } catch (error) {
        console.error("Error al crear/buscar usuario:", error);
        throw error;
    }
};

module.exports = {
    postLoginGoogle
};
