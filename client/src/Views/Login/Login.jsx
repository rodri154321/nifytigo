import React from 'react';
import './index.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='LoginContainer'>
    <div className="main">
      <div className="container b-container" id="b-container">
        <form className="form" id="b-form" method="" action="">
          <h2 className="form_title title">Sign in to Website</h2>
          <div className="form__icons">
            <img className="form__icon" src="" alt="" />
            <img className="form__icon" src="" />
            <img className="form__icon" src="" />
          </div>
          <span className="form__span">or use your email account</span>
          <input className="form__input" type="text" placeholder="Email" />
          <input className="form__input" type="password" placeholder="Password" />
          <a className="form__link">Forgot your password?</a>
          <button className="form__button button submit">SIGN IN</button>
        </form>
      </div>
      <div className="switch" id="switch-cnt">
        <div className="switch__circle"></div>
        <div className="switch_circle switch_circle--t"></div>
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Hello Friend !</h2>
          <p className="switch__description description">Enter your personal details and start journey with us</p>
          <Link to="/Account" className="form__button button submit">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;