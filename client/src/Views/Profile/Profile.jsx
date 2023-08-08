import style from "./Profile.module.css";
import { useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NifytiGo4.png";


const UserDashboard = () => {

    const loger = localStorage.getItem('loger')
    const userDetail = useSelector((state) => state.userDetail);

    const editProfile = () => {
        setShowAlertLog(true);
        setShowBackdrop(true);  
    }

    console.log(userDetail?.picture)
    const userPicture = (userDetail?.picture === null ||userDetail?.picture === undefined)?"https://cdn-icons-png.flaticon.com/512/309/309594.png?w=826&t=st=1691514627~exp=1691515227~hmac=ff66466c46bab20bb94370bfe8ba3111602743b23d53f4af10aadb499fa5ac0b":(userDetail?.picture)


return (
    <div className={style.user}>
      <div className={style.title}>
        <div className={style.imgBox}>
          <img
            className={style.img}
            src={userPicture}
            alt="https://cdn-icons-png.flaticon.com/512/309/309594.png?w=826&t=st=1691514627~exp=1691515227~hmac=ff66466c46bab20bb94370bfe8ba3111602743b23d53f4af10aadb499fa5ac0b"
          />
        </div>
        <div className={style.data}>
          <img src={logo} alt="" />
          <h2>User Name: {userDetail?.username}</h2>
          <h2>Name: {userDetail?.name}</h2>
          <h2>Last Name: {userDetail?.lastName}</h2>
          <h2>E-mail: {userDetail?.email}</h2>
          <h2>CellPhone: {userDetail?.cellPhone} </h2>
          <h2>E-mail: {userDetail?.email}</h2>
          <h2>Contry: {userDetail?.cellPhone} </h2>
          <button className={style.btn} onClick={editProfile} disabled={loger!=='true'}>Update</button>
        <button className={style.btn}>
          <NavLink
            to="/"
          >
            Back
          </NavLink>
        </button>
        </div>
      </div>
      
      <div className={style.games}>
      <h1 className={style.reserva}>My NFT's</h1>
      </div>
      </div>
      
       )
    };
export default UserDashboard;