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

  return (
    <form onSubmit={handleSubmit} className={style.loginContain} autoComplete="off">
      <div className={style.blurIn}>
        <div className={style.topContainer}>
          <div className={style.wobblehorizontalTop}>
            <img src='https://img.freepik.com/foto-gratis/concepto-alojamiento-sitios-web-luz-brillante_23-2149406783.jpg' alt='Login' /></div>

          <label htmlFor='username' className={style.usernameLabel}>
            <div className={style.trackinginexpandforwardbottom}>
              USERNAME :

            </div>
          </label>

          <input
            autoComplete="off"
            type='text'
            name='username'
            placeholder='hello@example.com'
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className={style.validacion}>{errors.username}</p>}

          <label htmlFor='password' className={style.passwordLabel}>
            <div className={style.scaleupbottom}>
              PASSWORD:
            </div>

          </label>

          <input
            autoComplete="off"
            type='password'
            name='password'
            placeholder='.......'
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className={style.validacion}>{errors.password}</p>}
          <br></br>
          <FacebookLogin
            appId="604618028449505"
            autoLoad={false}
            fields="name,email,picture"
            buttonText="Login with Facebook"
            callback={responseFacebook} />
            <br></br>
          <GoogleLogin
            clientId="520462004631-6pc5a0sbv00p5cg51rqrb5mqqep566rd.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={respuestaGoogle}
            onFailure={respuestaGoogle}
            cookiePolicy={'single_host_origin'} />

          <div className={style.bottomContainer}>
            <div className={style.rotatehorizontalcenter}>
              <button className={style.loginButton}>LOGIN
                <span class="material-symbols-outlined">
                </span></button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;