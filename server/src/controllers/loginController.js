const { users } = require("../db.js");

const postLogin = async(email, password) =>{

      console.log(email,password);

        const exist = await users.findOne({ where: { email: email } });
      if (!exist) throw Error("Usuario no encontrado")
  
      if (exist.password !== password) throw Error("Contraseña Invalida")

      if (exist.active !== true) throw Error("Usuario Desactivado")

      return exist;
}

module.exports = {
    postLogin
}