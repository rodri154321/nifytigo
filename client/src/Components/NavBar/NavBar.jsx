import { NavLink, useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import style from "./NavBar.module.css";
import logo from "../../assets/NifytiGo4.png";
//import { logout } from "../../redux/Actions/logout";
//import avatar from "../../assets/avatar2.png";
import SearchBar from "../../Components/Search/Search";

const NavBar = () => {
 // const navigate = useNavigate();
 // const dispatch = useDispatch();
 // const loger = localStorage.getItem("loger");
 // const isClient = localStorage.getItem("isClient");

 // const handleLogout = () => {
    //dispatch(logout()).then(() => {
      //navigate("/home");
   // });
   // localStorage.setItem("loger", false);
   // localStorage.setItem("detail", null);
 // };
  return (
    <div className={style.container}>
      <NavLink to="/">
        <div>
          <img src={logo} alt="logo" className={style.img} />
        </div>
      </NavLink>
      <div className={style.search}>
        <SearchBar />
      </div>
      <div className={style.navegation}>
        <NavLink to="/" className={style.navlink}>
          Home
        </NavLink>
        <NavLink to="/About" className={style.navlink}>
          About
        </NavLink>
        <NavLink to="/Profile" className={style.navlink}>
          Profile
        </NavLink>
        <NavLink to="/Purchase" className={style.navlink}>
          Purchase PP
        </NavLink>
        <NavLink to="/dashboard" className={style.navlink}>
          dashboard
        </NavLink>

        {/*{isClient === "true" && (
          <NavLink to="/dashboard" className={style.navlink}>
            <button className={style.avatarButton}>
              <img src={avatar} alt="Avatar" className={style.avatarImage} />
            </button>
          </NavLink>
        )} 
        {isClient === "false" && (
          <NavLink to="/admin" className={style.navlink}>
            <button className={style.avatarButton}>
              <img src={avatar} alt="Avatar" className={style.avatarImage} />
            </button>
          </NavLink>
        )}

        {loger === "true" ? (



          <NavLink to="" className={style.navlink} onClick={handleLogout}>
            <button className={style.btn}>
              <div className={style.sign}>
                <svg viewBox="0 0 512 512">
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                </svg>
              </div>

              <div className={style.textLogOut}>Log out</div>
            </button>
          </NavLink>*/}

          <NavLink to="/Login" className={style.navlink}>
            <button className={style.btn}>
              <div className={style.sign}>
                <svg viewBox="0 0 512 512">
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z">
                  </path>
                </svg>
              </div>
              <div className={style.text}>Login</div>
            </button>
          </NavLink>
         {/*  }*/}
      </div>
    </div>
  );
};
export default NavBar;
