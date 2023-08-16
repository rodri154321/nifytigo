
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

  const detail = localStorage.getItem("profile");

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

  //Autenticación con Google
  const clientID =
    "382815966378-j7fpqsigtlqffijmrdc2di4ehsrf9phe.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    console.log(response)
    const user = {
      email: response.profileObj.email,
      googleId: response.profileObj.googleId,
      name: response.profileObj.name,
    };
    dispatch(loginGoogle(user)).then(() => {
      navigate(`/profile/${Number(profile)}`); // Redirige al usuario a la página de perfil
    });

    //if (detail !== "null") {
    //navigate(`/detail/${Number(detail)}`);
    //} else {
    //navigate("/");
    //}
    //});
  };

  const onFailure = () => {
    console.log("could not log inn");
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

  const access = useSelector((state) => state.access)

  useEffect(() => {
    if (access) {
      Swal.fire({
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 2000,
        background: "#666",
        color: "#FFFFFF"
      });
      setUser({
        email: "",
        password: "",
      });
      navigate('/')
    }
  }, [access]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorSave = validate(user);
    if (Object.keys(errorSave).length === 0) {
      dispatch(login(user))
    }
  };



  return (
    <div className={style.LoginContainer}>
      <div className={style.gridContainer}></div>
      <div className={style.switchLogin} id="switch-cnt">
        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Welcome Back Nifytigo!</h2>
          <button className="switch__button button switch-btn">
            <NavLink to="/Account" className="navlink-style">
              SIGN UP
            </NavLink>
          </button>
        </div>
      </div>


      <form className={style.formLogin} onSubmit={(event) => handleSubmit(event)}>
        <h2>Login</h2>
        <div className={style.text}>
          <div className={style.content}>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
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
              placeholder="Password"
              onChange={(event) => handleChange(event)}
              className={style.formInputLogin}
            />
            {errors.password && (
              <span className={style.error}>{errors.password}</span>
            )}
          </div>
        </div>
        <div>
          <button className={style.btnLogin}>Access</button>
        </div>
        <p className={style.loginAccount}>O access for</p>
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