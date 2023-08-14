import style from "./Profile.module.css";
//import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NifytiGo4.png";
import FormNft from "../FormNft/FormNft";
import axios from "axios";
import Cards from "../../Components/Cards/Cards"
import Card from "../../Components/Card/Card";

const Profile = () => {

  const loger = localStorage.getItem('loger')
  const idUser = localStorage.getItem("clientId");


  const reload = () => {
    window.location.reload(false);
  };
  // Estado local para almacenar los datos del usuario
  const [userData, setUserData] = useState(null);
  const [userNFTs, setUserNFTs] = useState([]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (loger === 'true') {
          // Verificar si el usuario ha iniciado sesión con Google
          const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
          const isGoogleSignIn = googleUser.isSignedIn();
          if (isGoogleSignIn) {
            const profile = googleUser.getBasicProfile();
            setUserData({
              username: profile.getName(),
              name: profile.getGivenName(),
              lastName: profile.getFamilyName(),
              country: 'Please update your country', // Agrega el país si está disponible en Google
              cellPhone: 'Please update your cellPhone', // Agrega el número de teléfono si está disponible en Google
              email: profile.getEmail(),
              image: profile.getImageUrl(),
            });
          } else {
            const response = await axios.get(`http://localhost:3001/users/${idUser}`);
            setUserData(response.data);
          }
        } else {
          const response = await axios.get(`http://localhost:3001/users/${idUser}`);
          setUserData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    

    const fetchUserNFTs = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/nfts?userId=${idUser}`);
        setUserNFTs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
    fetchUserNFTs();
  }, [idUser, loger]);
  
  const editProfile = () => {
    setShowAlertLog(true);
    setShowBackdrop(true);
  }
  const [infoVisibleTwo, setInfoVisibleTwo] = useState(false);
  const [infoVisibleFour, setInfoVisibleFour] = useState(false);
  const [infoVisibleFive, setInfoVisibleFive] = useState(false);

  const toggleInfoTwo = () => {
    setInfoVisibleTwo(!infoVisibleTwo);
  };

  const toggleInfoFour = () => {
    setInfoVisibleFour(!infoVisibleFour);
  };

  const toggleInfoFive = () => {
    setInfoVisibleFive(!infoVisibleFive);
  };


  const userImage = (userData?.image === null || userData?.image === undefined) ? "https://cdn-icons-png.flaticon.com/512/309/309594.png?w=826&t=st=1691514627~exp=1691515227~hmac=ff66466c46bab20bb94370bfe8ba3111602743b23d53f4af10aadb499fa5ac0b" : (userData?.image)

  //const handleDelete = ()=>{
  //  event.preventDefault();
  //dispatch(deleteReservation(selectedReservationId));
  //7reload()
  //}

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
          {userData && (
            <>
              <h2>User Name: {userData.username}</h2>
              <h2>Name: {userData.name}</h2>
              <h2>Last Name: {userData.lastName}</h2>
              <h2>Country: {userData.country} </h2>
              <h2>CellPhone: {userData.cellPhone} </h2>
              <h2>E-mail: {userData.email}</h2>
            </>
          )}
          <button className={style.buttonProfile} onClick={editProfile} disabled={loger !== 'true'}>Update</button>
          <button className={style.buttonProfile}>
            <NavLink to="/">
              Back
            </NavLink>
          </button>
        </div>
      </div>
      <div className={style.games}>
        <h1 className={style.reserva}>Profile</h1>


<div className={style.navlinkCreateNft}>
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
              </div>
            );
          } else {
            return null; 
          }
        })}
      </Card>
    )}
  </div>
</div>

        <div className={style.navlinkCreateNft} >
          <div>
            <h1 onClick={toggleInfoTwo} className={style.navlinkFormn} >
              Create NFT
            </h1>
          </div>
          <div classname={style.CreateNftFormNft}>
            {infoVisibleTwo && <FormNft />}
          </div>
        </div>

        <div className={style.navlinkCreateNft} >
          <div>
            <h1 onClick={toggleInfoFive} className={style.navlinkFormn} >
              Favorites
            </h1>
          </div>
          <div classname={style.CreateNftFormNft}>
            {/*{infoVisibleFive && <FormNft />}*/}
          </div>
        </div>

      </div>
    </div>
  )
};
export default Profile;
