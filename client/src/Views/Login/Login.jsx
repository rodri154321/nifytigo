import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../Redux/login";
import { loginGoogle } from "../../Redux/loginGoogle";
import validate from "./validate";
import Swal from "sweetalert2";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const access = localStorage.getItem("access");

  const detail = localStorage.getItem("detail");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loger, setLoger] = useState(localStorage.getItem("loger") ?? false);

  const [errors, setErrors] = useState({
    email: "",
    googleId: "",
    imageUrl: "",
    name: "",
  });

  useEffect(() => {
    localStorage.setItem("loger", loger);
  }, [loger]);

  // Autenticación con Google
  const clientID =
    "382815966378-j7fpqsigtlqffijmrdc2di4ehsrf9phe.apps.googleusercontent.com";

  useEffect(() => {
    const start = async () => {
      await gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    const user = {
      // lastName:response.profileObj.lastName,
      // username: response.profileObj.username,
      email: response.profileObj.email,
      googleId: response.profileObj.googleId,
      name: response.profileObj.name,
    };
    console.log(user);
    dispatch(loginGoogle(user)).then(() => {
      navigate("/");
    });
  };

  const onFailure = () => {
    console.log("could not log in");
  };

  //--------------------------

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...user,
        [event.target.name]: event.target.value,
      })
    );
  };

  

  useEffect(() => {
    if (access) {
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        showConfirmButton: false,
        timer: 2000,
        background: "#666",
        color: "#FFFFFF",
      });
      setUser({
        email: "",
        password: "",
      });
      navigate("/");
    }
  }, [access]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorSave = validate(user);
    if (Object.keys(errorSave).length === 0) {
      dispatch(login(user));
    }
  };

  return (
    <div className={style.LoginContainer}>
      <div className={style.gridContainer}></div>
      <div className={style.switchLogin} id="switch-cnt">
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">¡Bienvenido de nuevo a Nifytigo!</h2>
          <button className="switch__button button switch-btn">
            <NavLink to="/Account" className="navlink-style">
              REGISTRARSE
            </NavLink>
          </button>
        </div>
      </div>

      <form
        className={style.formLogin}
        onSubmit={(event) => handleSubmit(event)}
      >
        <h2>Iniciar sesión</h2>
        <div className={style.text}>
          <div className={style.content}>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Correo electrónico"
              onChange={(event) => handleChange(event)}
              className={style.formInputLogin}
            />
            {errors.email && (
              <span className={style.error}>{errors.email}</span>
            )}
          </div>
          <div className={style.content}>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Contraseña"
              onChange={(event) => handleChange(event)}
              className={style.formInputLogin}
            />
            {errors.password && (
              <span className={style.error}>{errors.password}</span>
            )}
          </div>
        </div>
        <div>
          <button className={style.btnLogin}>Acceder</button>
        </div>
        <p className={style.loginAccount}>O acceder mediante</p>
        <div className={style.googleContainer}>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>

      </form>
    </div>
  );
};

export default Login;
