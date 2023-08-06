// Account.js
import React, { useState } from 'react';
import validation from './validation';
import Login from '../Login/Login'

const Account = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
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
    const formErrors = validation(userData);
    if (Object.keys(formErrors).length === 0) {
      // Aquí puedes hacer la llamada al servidor o ejecutar cualquier acción con los datos
      onSubmit(userData);
    } else {
      // Si hay errores, los establecemos en el estado para mostrarlos en el formulario
      setErrors(formErrors);
    }
  };

  const handleSignUp = () => {
    window.location.href = Login;
  };

  return (
    <div className="main">
      <div className="container a-container" id="a-container">
        <form className="form" id="a-form" onSubmit={handleSubmit}>
          <h2 className="form_title title">Create Account</h2>
          <div className="form__icons">
            <img className="form__icon" src="" alt="" />
            <img className="form__icon" src="" />
            <img className="form__icon" src="" />
          </div>
          <span className="form__span">or use email for registration</span>
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
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
          <button className="form__button button submit" onClick={handleSubmit}>SIGN UP</button>
        </form>
      </div>
      <div className="switch" id="switch-cnt">
      <div className="switch__circle"></div>
        <div className="switch__circle switch__circle--t"></div>
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Welcome Back !</h2>
          <p className="switch__description description">To keep connected with us please login with your personal info.</p>
          <button className="switch__button button switch-btn" onClick={handleSignUp}>SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default Account;









// import React from 'react';

// const Account = () => {
//   return (
//     <div className="main">
//       <div className="container a-container" id="a-container">
//         <form className="form" id="a-form" method="" action="">
//           <h2 className="form_title title">Create Account</h2>
//           <div className="form__icons">
//             <img className="form__icon" src="" alt="" />
//             <img className="form__icon" src="" />
//             <img className="form__icon" src="" />
//           </div>
//           <span className="form__span">or use email for registration</span>
//           <input className="form__input" type="text" placeholder="Name" />
//           <input className="form__input" type="text" placeholder="Email" />
//           <input className="form__input" type="password" placeholder="Password" />
//           <button className="form__button button submit">SIGN UP</button>
//         </form>
//       </div>
//       <div className="switch" id="switch-cnt">
//         <div className="switch__circle"></div>
//         <div className="switch__circle switch__circle--t"></div>
//         <div className="switch__container" id="switch-c1">
//           <h2 className="switch__title title">Welcome Back !</h2>
//           <p className="switch__description description">To keep connected with us please login with your personal info</p>
//           <button className="switch__button button switch-btn">SIGN IN</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;
