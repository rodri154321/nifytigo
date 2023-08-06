// loginValidation.js
const loginValidation = (userData) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};
  
    if (!regexEmail.test(userData.email)) {
      errors.email = "El email no es válido";
    }
    if (!userData.email) {
      errors.email = "Completa el campo por favor";
    }
    if (userData.email.length > 100) {
      errors.email = "El email no debe superar los 100 caracteres";
    }
  
    if (!userData.password) {
      errors.password = "Completa el campo por favor";
    }
    if (!userData.password.match(/\d/)) {
      errors.password = "La contraseña debe tener al menos un número";
    }
    if (userData.password.length < 6 || userData.password.length > 15) {
      errors.password = "La contraseña debe tener entre 6 y 15 caracteres";
    }
  
    return errors;
  };
  
  export default loginValidation;
  