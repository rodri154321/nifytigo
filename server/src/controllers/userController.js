const { users } = require('../db')


const allUsers = async () => {
    const allusersDb = users.findAll()
    return allusersDb
}

const createUser = async (username, name, lastName, email, password, cellPhone, country) => {
    const newUser = await users.create({ username, name, lastName, email, password, cellPhone, country })
    return newUser
}

const findUserName = async (username, password) => {

    const exist = await users.findOne({ where: { username: username } });
    if (exist) {
        if(exist.password === password) {
            login = true;
            return login;
        }else{
            login = false;
            throw Error(`Contraseña Incorrecta`);
        }
    }else{
        login = false;
        throw Error(`Usuario Incorrecto`);
    }


}

const deleteUsersById= async(id)=>{

    let userId = await users.findByPk(id)

 

    return 

}

module.exports = { allUsers, createUser, findUserName, deleteUsersById }
