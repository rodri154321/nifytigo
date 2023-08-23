const { users, nfts } = require('../db')


const allUsers = async () => {
    const allusersDb = users.findAll({where:{admin:false}})
    return allusersDb
}

const createUser = async (username, name, lastName, email, password, cellPhone, country, admin, image, active) => {
    const customCreatedAt = new Date();
    const newUser = await users.create({ username, name, lastName, email, password, cellPhone, country, admin, image, active ,customCreatedAt})

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

const banearUser = async (id) => {
    const userBan = await users.findByPk(id);
    return userBan;
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

const updateUser = async (id, updates) => {
    try {
      const user = await users.findByPk(id);
      
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
  
      // Validar los datos actualizados si es necesario
  
      // Realizar actualizaciones solo para campos que han cambiado
      const updatedFields = {};
  
      for (const key of Object.keys(updates)) {
        if (user[key] !== updates[key]) {
          updatedFields[key] = updates[key];
        }
      }
  
      if (Object.keys(updatedFields).length === 0) {
        return user; // No hay actualizaciones necesarias
      }
  
      await users.update(updatedFields, {
        where: { id },
      });
  
      // Obtener el usuario actualizado
      const updatedUser = await users.findByPk(id);
      
      return updatedUser;
    } catch (error) {
      throw new Error('No se pudo actualizar el Usuario');
    }
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


module.exports = { deleteSearchName, getUserId, searchUsersnameByName, allUsers, createUser, findUserName, deleteUsersById, updateUser, searchUserNft, grantAdminAcces, banearUser }
