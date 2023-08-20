const { users, nfts } = require('../db')


const allUsers = async () => {
    const allusersDb = users.findAll()
    return allusersDb
}

const createUser = async (username, name, lastName, email, password, cellPhone, country, admin, image) => {
    const newUser = await users.create({ username, name, lastName, email, password, cellPhone, country, admin, image })

    return newUser
}

const getUserId = async (id) => {
    const user = await users.findByPk(id);
    return user;
}

const grantAdminAcces = async (id) => {
    const userAdmin = await users.findByPk(id);
    return userAdmin
}

const findUserName = async (username, password) => {
    const exist = await users.findOne({ where: { username: username } });
    if (exist) {
        if (exist.password === password) {
            login = true;
            return login;
        } else {
            login = false;
            return (`Contraseña Incorrecta`);
        }
    } else {
        login = false;
        throw Error(`Usuario Incorrecto`);
    }

};

const updateUser = async (id, username, name, lastName, image, password, cellPhone, country) => {

    const userUp = await users.findByPk(id);

    if (userUp.username !== username) {
        await users.update({ username: username },
            {
                where: {
                    username: userUp.username
                }
            })
    }
    if (userUp.name !== name) {
        await users.update({ name: name },
            {
                where: {
                    name: userUp.name
                }
            })
    }

    if (userUp.lastName !== lastName) {
        await users.update({ lastName: lastName },
            {
                where: {
                    lastName: userUp.lastName
                }
            })
    }

    if (userUp.image !== email) {
        await users.update({ image: image },
            {
                where: {
                    image: userUp.image
                }
            })
    }

    if (userUp.password !== password) {
        await users.update({ password: password },
            {
                where: {
                    password: userUp.password
                }
            })
    }

    if (userUp.cellPhone !== cellPhone) {
        await users.update({ cellPhone: cellPhone },
            {
                where: {
                    cellPhone: userUp.cellPhone
                }
            })
    }

    if (userUp.country !== country) {
        await users.update({ country: country },
            {
                where: {
                    country: userUp.country
                }
            })
    }

    const newUserUp = await users.findByPk(id);
    return newUserUp
};


const deleteUsersById = async (id) => {

    let idUser = await users.findByPk(id)
    if (idUser) {
        users.destroy({
            where: { id: id }
        })
        return 'usuario eliminado'
    }

    return 'usuario inexistente'
}



const searchUsersnameByName = async (username) => {
    if (username) {
        let palabraM = username.username.toUpperCase()
        let primeraLetra = palabraM[0]

        let minuscula = username.username.toLowerCase().slice(1)

        let nombre = primeraLetra + minuscula

        let union = username.username = nombre

        const user = await users.findAll({ where: username })

        return user
    } else {
        const user = await users.findAll({ where: username })

        return user
    }

}



const deleteSearchName = async (username) => {

    const exist = await users.findOne({ where: { username: username } });
    if (exist) {
        if (exist.username === username) {
            users.destroy({
                where: { username: username }
            })

            return 'usuario eliminado'
        }
        return 'usuario inexistente'



    }
};

const searchUserNft = async (id) => {
    const user = await users.findByPk(id, {
        include: [{
            model: nfts
        }]
    })
    return user
};


module.exports = { deleteSearchName, getUserId, searchUsersnameByName, allUsers, createUser, findUserName, deleteUsersById, updateUser, searchUserNft, grantAdminAcces }
