const { users } = require("../db.js");

const postLoginGoogle = async(user) =>{
    console.log("EMAIL", user.email, "GOOGLEID", user.googleId, "NAME", user.name);

    const newuser = await users.findOrCreate({ 
        where: { email : user.email },
        defaults: {
            name: user.name,
            email: user.email,
            password: user.googleId,
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