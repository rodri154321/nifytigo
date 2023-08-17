const { users } = require("../db.js");

const postLoginGoogle = async(email,googleId,name) =>{
    console.log("EMAIL", email, "GOOGLEID", googleId, "NAME", name);

    const newuser = await users.findOrCreate({ 
        where: { email : email },
        defaults: {
            name: name,
            email: email,
            password: googleId,
            cellPhone:"",
            country:"",
            username:"",
            lastName:"",
        } 
    });

    return newuser;
    
}

module.exports = {
    postLoginGoogle
}