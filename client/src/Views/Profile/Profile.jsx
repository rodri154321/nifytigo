import style from "./Profile.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NifytiGo4.png";
import FormNft from "../FormNft/FormNft";

const Profile = () => {

  const loger = localStorage.getItem('loger')
  const userDetail = useSelector((state) => state.userDetail);

  const editProfile = () => {
    setShowAlertLog(true);
    setShowBackdrop(true);
  }
  /*desplegable */
  const [infoVisibleTwo, setInfoVisibleTwo] = useState(false);

  const toggleInfoTwo = () => {
    setInfoVisibleTwo(!infoVisibleTwo);
  };

  console.log(userDetail?.picture)
  const userPicture = (userDetail?.picture === null || userDetail?.picture === undefined) ? "https://cdn-icons-png.flaticon.com/512/309/309594.png?w=826&t=st=1691514627~exp=1691515227~hmac=ff66466c46bab20bb94370bfe8ba3111602743b23d53f4af10aadb499fa5ac0b" : (userDetail?.picture)



  return (
    <div className={style.containerProfile}>
      <div className={style.titleProfile}>
        <div className={style.imgBoxProfile}>
          <img
            className={style.imgProfile}
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
          <button className={style.btnProfile} onClick={editProfile} disabled={loger !== 'true'}>Update</button>
          <button className={style.btnProfile}>
            <NavLink
              to="/"
            >
              Back
            </NavLink>
          </button>
        </div>
      </div>
      <div className={style.games}>
        <h1 className={style.reserva}>Profile</h1>

        <div className={style.navlinkCreateNft} >
          <div>
          <h1 onClick={toggleInfoTwo}className={style.navlinkFormn} >
          My NFT's
          </h1>
          </div>
          <div classname={style.CreateNftFormNft}>
            {infoVisibleTwo && <FormNft />}
          </div>
        </div>

        <div className={style.navlinkCreateNft} >
          <div>
          <h1 onClick={toggleInfoTwo}className={style.navlinkFormn} >
            Create NFT
          </h1>
          </div>
          <div classname={style.CreateNftFormNft}>
            {infoVisibleTwo && <FormNft />}
          </div>
        </div>

        <div className={style.navlinkCreateNft} >
          <div>
          <h1 onClick={toggleInfoTwo}className={style.navlinkFormn} >
            Favorites
          </h1>
          </div>
          <div classname={style.CreateNftFormNft}>
            {infoVisibleTwo && <FormNft />}
          </div>
        </div>

      </div>
    </div>
  )
};
export default Profile;
