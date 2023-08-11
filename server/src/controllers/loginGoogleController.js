const { User } = require("../db.js");

const postLoginGoogle = async({email, googleId, name}) =>{


    const user = await User.findOrCreate({ 
        where: { email },
        defaults: {
            name: name,
            email,
            password: googleId,
        } 
    });

    return user;
    
}



module.exports = {
    postLoginGoogle
}