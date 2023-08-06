
import React from 'react';
import './index.css'

import { useState } from 'react'
import style from './Login.module.css'
import validation from './validation';
import GoogleLogin from '@leecheuk/react-google-login';
import FacebookLogin from '@greatsumini/react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}
const respuestaGoogle = (respuesta) => {
  console.log(respuesta);
  console.log(respuesta.profileObj);
}

const Login = ({ login }) => {

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value
    });
    setErrors(validation({
      ...userData,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }


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
}
export default Login;