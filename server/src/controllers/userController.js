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
           return `Contraseña Incorrecta`
        }
    }else{
        login = false;
       return `Usuario Incorrecto`
    }


}


const deleteUsersById= async(id)=>{

   let idUser = await users.findByPk(id)
    if(idUser){
  users.destroy({
    where: {id:id}
 })
 return 'usuario eliminado'
    }

    return 'usuario inexistente'
}  


const usersById = async(id)=>{

    let idUser = await users.findByPk(id)
 
    return idUser

}



const searchUsersnameByName = async(username)=>{
    if(username){
    let palabraM = username.username.toUpperCase()
    let primeraLetra = palabraM[0] 
    
    let minuscula = username.username.toLowerCase().slice(1)
    
    let nombre = primeraLetra + minuscula 

 let union = username.username = nombre 

    const user = await users.findAll({where: username}) 

    return user 
}else{
    const user = await users.findAll({where: username}) 

    return user 
}
    
}



const deleteSearchName = async(username)=>{
       
    const exist = await users.findOne({ where: { username: username } });
    if (exist) {
        if(exist.username === username) {
            users.destroy({
                where: {username:username}
             })

             return 'usuario eliminado'
        }
        return 'usuario inexistente'


    
    }}

module.exports = {deleteSearchName,usersById,searchUsersnameByName, allUsers, createUser, findUserName, deleteUsersById }
 