import React, { useState } from 'react';
import Account from '../Account/Account'
import './index.css'

function validate(user) {
  let errors = {};

  if (!user.email) {
    errors.email = "Enter your email";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
    errors.email = "Invalid email";
  }
  if (user.email.length >= 35) {
    errors.email = "Invalid email";
  }

  if (!/\d/.test(user.password)) {
    errors.password = "Password must contain a letter";
  }

  if (user.password.length < 6 || user.password.length > 10) {
    errors.password = "Password must be between 6 and 10 characters";
  }

  return errors;
}

const Login = ({ loginc }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({email: "", password: ""});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault(user);

    if (!errors.email && !errors.password) {
      loginc(user);
    } else {
      alert("Incorrect data");
    }
  }

  const handleSignUp = () => {
    window.location.href = Account;
  };

  return (
    <div className='LoginContainer'>
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
          <p className="switch__description description">Enter your personal details and start journey with us</p>
          <button className="switch__button button switch-btn"><a href="/Account">SIGN UP</a></button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;