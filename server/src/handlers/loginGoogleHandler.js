const { postLoginGoogle } = require("../controllers/loginGoogleController");
//const emailer = require("../emailer");

const loginGoogle = async (req, res) => {
  const {email, googleId,name} = req.params;
  console.log("user", email,googleId,name);
  try {
    const response = await postLoginGoogle(email,googleId,name);

   //emailer.sendMail({email, name});


    return res.status(200).json({ message: "Registro Exitoso", homeURL: "/", response });

  } catch (error) {

    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  loginGoogle
}