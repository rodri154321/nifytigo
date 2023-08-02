const {user} = require('../db')

const axios = require('axios')

const allUsers = async ()=>{
//BUSCAR EN LA BSD
    //BUSCAR EN LA API
    //BUSCAR EN LA API
    const allusersApi= (await axios.get(`https://api.rawg.io/api/games?key=435f1d4454034841aee18c9d3e81494f`)).data

    return    allusersApi
    }

    const getCreateUser = async(name,lastName,email,password,cellPhone,country)=>{
const newUser = await user.create({name,lastName,email,password,cellPhone,country})
console.log('post userCreate')
return newUser
    }
    
    module.exports = {allUsers, getCreateUser}