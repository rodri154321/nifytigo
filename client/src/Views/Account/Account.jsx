import React from 'react';
import './index.css'

const Account = () => {
  return (
    <div className='AccountContainer'>
    <div className="main">
      <div className="container a-container" id="a-container">
        <form className="form" id="a-form" method="" action="">
          <h2 className="form_title title">Create Account</h2>
          <div className="form__icons">
            <img className="form__icon" src="" alt="" />
            <img className="form__icon" src="" />
            <img className="form__icon" src="" />
          </div>
          <span className="form__span">or use email for registration</span>
          <input className="form__input" type="text" placeholder="Name" />
          <input className="form__input" type="text" placeholder="Email" />
          <input className="form__input" type="password" placeholder="Password" />
          <button className="form__button button submit">SIGN UP</button>
        </form>
      </div>
      <div className="switch" id="switch-cnt">
        <div className="switch__circle"></div>
        <div className="switch__circle switch__circle--t"></div>
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Welcome Back !</h2>
          <p className="switch__description description">To keep connected with us please login with your personal info</p>
          {/*<button className="switch__button button switch-btn">SIGN IN</button>*/}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Account;