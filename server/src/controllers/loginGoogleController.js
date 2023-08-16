const { users } = require("../db.js");

const postLoginGoogle = async(user) =>{
    console.log("EMAIL", user.email, "GOOGLEID", user.googleId, "NAME", user.name);

    const user = await users.findOrCreate({ 
        where: { email : email },
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

    return user;
    
}

module.exports = {
    postLoginGoogle
}