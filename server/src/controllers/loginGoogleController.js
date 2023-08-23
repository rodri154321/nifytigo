const { users } = require("../db.js");

const postLoginGoogle = async (email, googleId, name) => {
    console.log("EMAIL", email, "GOOGLEID", googleId, "NAME", name);

    try {
        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await users.findOne({ where: { email } });

        if (existingUser) {
            // El usuario ya existe, devolverlo
            return existingUser;
        } else {
            // El usuario no existe, crear uno nuevo
            const newUser = await users.create({
                name: name,
                email: email,
                password: googleId,
                cellPhone: "",
                country: "",
                username: "",
                lastName: "",
            });

            // Devuelve el nuevo usuario creado
            return newUser;
        }
    } catch (error) {
        console.error("Error al crear/buscar usuario:", error.message);
        throw error;
    }
};

module.exports = {
    postLoginGoogle
};
