import React, { useState } from 'react';
import loginValidation from './loginValidation';
import Account from '../Account/Account'

const Login = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = loginValidation(userData);
    if (Object.keys(formErrors).length === 0) {
      // Aquí puedes hacer la llamada al servidor o ejecutar cualquier acción con los datos
      onSubmit(userData);
    } else {
      // Si hay errores, los establecemos en el estado para mostrarlos en el formulario
      setErrors(formErrors);
    }
  };
  const handleSignUp = () => {
    window.location.href = Account;
  };

  return (
    <div className="main">
      <div className="container b-container" id="b-container">
        <form className="form" id="b-form" onSubmit={handleSubmit}>
          <h2 className="form_title title">Sign in to Website</h2>
          <div className="form__icons">
            <img className="form__icon" src="" alt="" />
            <img className="form__icon" src="" />
            <img className="form__icon" src="" />
          </div>
          <span className="form__span">or use your email account</span>
          <input
            className="form__input"
            type="text"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <input
            className="form__input"
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <a className="form__link">Forgot your password?</a>
          <button className="form__button button submit" onClick={handleSubmit}>SIGN IN</button>
        </form>
      </div>
      <div className="switch" id="switch-cnt">
      <div className="switch__circle"></div>
        <div className="switch__circle switch__circle--t"></div>
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Hello Friend !</h2>
          <p className="switch__description description">Enter your personal details and start journey with us.</p>
          <button className="switch__button button switch-btn" onClick={handleSignUp}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Login;









// const Login = () => {
//   return (
//     <div className="main">
//       <div className="container b-container" id="b-container">
//         <form className="form" id="b-form" method="" action="">
//           <h2 className="form_title title">Sign in to Website</h2>
//           <div className="form__icons">
//             <img className="form__icon" src="" alt="" />
//             <img className="form__icon" src="" />
//             <img className="form__icon" src="" />
//           </div>
//           <span className="form__span">or use your email account</span>
//           <input className="form__input" type="text" placeholder="Email" />
//           <input className="form__input" type="password" placeholder="Password" />
//           <a className="form__link">Forgot your password?</a>
//           <button className="form__button button submit">SIGN IN</button>
//         </form>
//       </div>
//       <div className="switch" id="switch-cnt">
//         <div className="switch__circle"></div>
//         <div className="switch__circle switch__circle--t"></div>
//         <div className="switch__container" id="switch-c1">
//           <h2 className="switch__title title">Hello Friend !</h2>
//           <p className="switch__description description">Enter your personal details and start journey with us</p>
//           <button className="switch__button button switch-btn">SIGN UP</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
