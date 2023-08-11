// import React, { useState } from 'react';
// import './index.css'

// function validate(user) {
//   let errors = {};

//   if (!user.email) {
//     errors.email = "Enter your email";
//   }
//   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
//     errors.email = "Invalid email";
//   }
//   if (user.email.length >= 35) {
//     errors.email = "Invalid email";
//   }

//   if (!/\d/.test(user.password)) {
//     errors.password = "Password must contain a letter";
//   }

//   if (user.password.length < 6 || user.password.length > 10) {
//     errors.password = "Password must be between 6 and 10 characters";
//   }

//   return errors;
// }

// const Login = ({ loginc }) => {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({email: "", password: ""});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       [name]: value,
//     }));
  
//     setErrors(validate({
//       ...userData,
//       [name]: value,
//     }));
//   };
  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (Object.keys(errors).length === 0) {
//       // Aquí puedes hacer la llamada al servidor o ejecutar cualquier acción con los datos
//       console.log(userData); // Reemplaza esto con la lógica que necesites
//     } else {
//       // Si hay errores, los establecemos en el estado para mostrarlos en el formulario
//       console.log("Hay errores en el formulario");
//     }
//   };
  
//   // const handleSubmit = (e) => {
//   //   e.preventDefault(user);

//   //   if (!errors.email && !errors.password) {
//   //     loginc(user);
//   //   } else {
//   //     alert("Incorrect data");
//   //   }
//   // }

//   return (
//     <div className='LoginContainer'>
//     <div className="main">
//       <div className="container b-container" id="b-container">
//         <form className="form" id="b-form" onSubmit={handleSubmit}>
//           <h2 className="form_title title">Sign in to Website</h2>
//           <div className="form__icons">
//             <img className="form__icon" src="" alt="" />
//             <img className="form__icon" src="" />
//             <img className="form__icon" src="" />
//           </div>
//           <span className="form__span">or use your email account</span>
//           <input
//             className="form__input"
//             type="text"
//             name="email"
//             placeholder="Email"
//             value={userData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <div className="error">{errors.email}</div>}
//           <input
//             className="form__input"
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={userData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <div className="error">{errors.password}</div>}
//           <a className="form__link">Forgot your password?</a>
//           <button className="form__button button submit" onClick={handleSubmit}>SIGN IN</button>
//         </form>
//       </div>
//       <div className="switch" id="switch-cnt">
//         <div className="switch__circle"></div>
//         <div className="switch__container" id="switch-c1">
//           <h2 className="switch__title title">Hello Friend !</h2>
//           <p className="switch__description description">Enter your personal details and start journey with us</p>
//           <button className="switch__button button switch-btn"><a href="/Account">SIGN UP</a></button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;


{/* import { useNavigate } from 'react-router-dom';
import './index.css';
import { useState } from 'react';

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

function authenticateUser(email, password) {
  // Aquí puedes realizar la autenticación con una API o base de datos
  // Devuelve true si las credenciales son válidas o false si no lo son
  // Este es solo un ejemplo simulado
  return email === 'usuario1@gmail.com' && password === 'usuario1';
}

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nueva variable de estado para rastrear el estado del inicio de sesión
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    setErrors(validate({
      ...userData,
      [name]: value,
    }));
  };

  const getAccount = () => {
    navigate("/Account")
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      // Realizar la validación real de inicio de sesión aquí
      // Por ejemplo, autenticar con una API o base de datos
      const isValidUser = await authenticateUser(userData.email, userData.password);

      if (isValidUser) {
        setIsLoggedIn(true); // Usuario autenticado correctamente
        navigate('/'); // Realizar la redirección utilizando useNavigate
      } else {
        console.log("Credenciales incorrectas");
      }
    } else {
      console.log("Hay errores en el formulario");
    }
  };

  // Si isLoggedIn es verdadero, redirige a la página deseada
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="main">
      <div className='contenedorDelLogin'>
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
          <button onClick={getAccount} className="switch__button button switch-btn"><a href="/Account">SIGN UP</a></button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Login;  */}

import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorSave = validate(user);

    if (Object.keys(errorSave).length === 0) {
      dispatch(login(user))
        .then(() => {
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

          if (profile !== "null") {
            navigate(`/profile/${Number(profile)}`);
          } else {
            navigate("/");
          }

          localStorage.setItem("loger", true);
        })
        .catch((error) => {
          if (error.response) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.response.data.error,
              background: "#666",
              color: "#FFFFFF",
              showConfirmButton: false,
              timer: 2000
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.message,
              background: "#666",
              color: "#FFFFFF",
              showConfirmButton: false,
              timer: 2000
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "Please, fill all the fields correctly.",
        background: "#666",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  };

  return (
    <div className={style.LoginContainer}>

      <form className={style.form} onSubmit={(event) => handleSubmit(event)}>
        <h2>Login</h2>
        <div className={style.text}>
          <div className={style.content}>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={(event) => handleChange(event)}
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
            />
            {errors.password && (
              <span className={style.error}>{errors.password}</span>
            )}
          </div>
        </div>
        <div>
          <button className={style.btn}>Access</button>
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
        <div>
          <NavLink to="/account" className={style.account}>
            <p className={style.loginAccount}>¿You don't have an account yet?</p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
