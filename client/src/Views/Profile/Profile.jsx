import style from "./Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateUserDetail } from "../../Redux/updateUserDetail";
import { getUserIdAsync, getNftsForUser } from "../../Redux/getUser";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NifytiGo4.png";
import FormNft from "../FormNft/FormNft";
import Cards from "../../Components/Card/Card";
import line from "../../assets/line.png"
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const loger = localStorage.getItem('loger');
  const [storedUserId, setStoredUserId] = useState(localStorage.getItem("clientId"));

  const dispatch = useDispatch();

  const userDetail = useSelector(state => state.userDetail);
  const userNFTs = useSelector(state => state.userNFTs);

  useEffect(() => {
    setStoredUserId(localStorage.getItem("clientId"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loger === 'true') {
          const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
          const isGoogleSignIn = googleUser.isSignedIn();
          if (isGoogleSignIn) {
            const profile = googleUser.getBasicProfile();
            const updatedUserDetail = {
              username: profile.getName(),
              name: profile.getGivenName(),
              lastName: profile.getFamilyName(),
              country: '',
              cellPhone: '',
              email: profile.getEmail(),
              image: profile.getImageUrl(),
            };
            dispatch(updateUserDetail(updatedUserDetail));
          }
        }

        // Get user ID and user NFTs
        await dispatch(getUserIdAsync(loger, storedUserId));
        
        await dispatch(getNftsForUser(storedUserId));
      } catch (error) {

        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, storedUserId, loger]);


  const [infoVisibleTwo, setInfoVisibleTwo] = useState(false);
  const [infoVisibleFour, setInfoVisibleFour] = useState(false);
  const [infoVisibleFive, setInfoVisibleFive] = useState(false);
  const [showAlertLog, setShowAlertLog] = useState(false);

  const toggleInfoTwo = () => {
    setInfoVisibleTwo(!infoVisibleTwo);
  };

  const toggleInfoFour = () => {
    setInfoVisibleFour(!infoVisibleFour);
  };

  const toggleInfoFive = () => {
    setInfoVisibleFive(!infoVisibleFive);
  };

  const editProfile = () => {
    console.log("Opening modal");
    setShowAlertLog(true);
  };
  
  const userImage = userDetail?.image || "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfXuM3iS_aGTL5IijNPFKi0Iu4x_J5l7zUpK6x3jvdYFAxDtjm";

  return (
    <div className={style.containerProfile}>
      <div className={style.titleProfile}>
        <div className={style.imgBoxProfile}>
          <img
            className={style.imgProfile}
            src={userImage}
            alt="https://cdn-icons-png.flaticon.com/512/309/309594.png?w=826&t=st=1691514627~exp=1691515227~hmac=ff66466c46bab20bb94370bfe8ba3111602743b23d53f4af10aadb499fa5ac0b"
          />
        </div>
        <div className={style.data}>
          <img src={logo} alt="" />
          {userDetail && (
            <>
              <h2>Username: {userDetail.username}</h2>
              <h2>Name: {userDetail.name}</h2>
              <h2>Last name: {userDetail.lastName}</h2>
              <h2>Country: {userDetail.country} </h2>
              <h2>Cell phone: {userDetail.cellPhone} </h2>
              <h2>E-mail: {userDetail.email}</h2>
            </>
          )}
          <button className={style.buttonProfile} onClick={editProfile} disabled={loger !== 'true'}>
          <NavLink to="/UpdateUser">Update</NavLink>
          </button>
          </div>

          {/*{showAlertLog && (
            <div className={style.popup}>
              <div className={style.container}>
                <h2>Edit Personal Data</h2>
              </div>
              <div className={style.containerBtn}>
                <UpdateUser userDetail={userDetail} />
                <button className={style.btnCancel} onClick={handleClose}>Cancel</button>
              </div>
            </div>
          )}*/}


          <button className={style.buttonProfile}>
            <NavLink to="/">Back</NavLink>
          </button>
        
      </div>
      <div className={style.games}>
        {/*  <h1 className={style.reserva}>Profile</h1>*/}
        <img src={line} />
        {/*<div className={style.navlinkCreateNft}>
  <div>
    <h1 onClick={toggleInfoFour} className={style.navlinkFormn}>
      Mis NFT's
    </h1>
  </div>
  <div className={style.CreateNftFormNft}>
    {infoVisibleFour && (
      <Card>
        {userNFTs.map(nft => {
          
          if (nft.idUsuario === idUser || nft.idGoogle === tuIdGoogle) {
            console.log(userNFTs)
            return (
              <div key={nft.id}>
                {nft.title}
                {/* Renderiza otros detalles de la carta aquí si es necesario */}
        {/* </div>
            );
          } else {
            return null; 
          }
        })}
      </Card>
    )}
  </div>
  </div>*/}

        <div className={style.navlinkCreateNft} >
          <div>
            <h1 onClick={toggleInfoTwo} className={style.navlinkProfile} >
              Create NFT
            </h1>
          </div>
          <div classname={style.CreateNftFormNft}>
            {infoVisibleTwo && <FormNft />}
          </div>
        </div>

        <div className={style.navlinkCreateNft} >
          <div>
            <h1 onClick={toggleInfoFive} className={style.navlinkProfile} >
              Bought
            </h1>
          </div>
          <div classname={style.CreateNftFormNft}>
            {/*{infoVisibleFive && <FormNft />}*/}
          </div>
        </div>

        <div className={style.navlinkCreateNft}>
          <div>
            <h1 onClick={toggleInfoFive} className={style.navlinkProfile}>
              My NFT's
            </h1>
          </div>

        

        </div>

      </div>
    </div>
  )
};

export default Profile;