<<<<<<< HEAD
const { users } = require('../db')
=======
const {users} = require('../db')
>>>>>>> 7637825cfe44283dafb1404762180174f6b600b4

const axios = require('axios')

const allUsers = async () => {
    //BUSCAR EN LA BSD
    //BUSCAR EN LA API
    //BUSCAR EN LA API
<<<<<<< HEAD
    const allusersApi = (await axios.get(`https://api.rawg.io/api/games?key=435f1d4454034841aee18c9d3e81494f`)).data

    return allusersApi
}

const getCreateUser = async (name, lastName, email, password, cellPhone, country) => {
    const newUser = await users.create({ name, lastName, email, password, cellPhone, country })
    console.log('post userCreate')
    return newUser
}

module.exports = { allUsers, getCreateUser }
=======
    const allUsersDbs = await users.findAll()
    const allusersApi= (await axios.get(`https://api.rawg.io/api/games?key=435f1d4454034841aee18c9d3e81494f`)).data
    return  allUsersDbs
    }

    const getCreateUser = async(name,lastName,email,password,cellPhone,country)=>{
const newUser = await users.create({name,lastName,email,password,cellPhone,country})
console.log('post userCreate')
return newUser
    }
    
module.exports = {allUsers, getCreateUser}
>>>>>>> 7637825cfe44283dafb1404762180174f6b600b4
