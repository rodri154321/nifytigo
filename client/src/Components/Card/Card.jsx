import { NavLink, useLocation } from "react-router-dom"
import "./Card.css"
import { useState,useEffect} from "react";
import axios from "axios"
import { useSelector} from "react-redux/es/hooks/useSelector";
import { setDeleteCartLogo } from "../../Redux/cardLogoID";
import { useDispatch } from "react-redux";

function Card(ejemplo) {
/*redux */
const dispatch=useDispatch();
const isProfileRoute = location.pathname === '/Profile' || location.pathname ==='/Purchase';
 const [cart, setCart] = useState([]);
 const [deleteStatus, setDeleteStatus] = useState(null);
 const idUserActual=localStorage.getItem("clientId");
 const idCartActual=localStorage.getItem("cartId");      

// let idCardLogoSet=useSelector(state=>state.cardLogoID);
// console.log('El ID a setear su cart image:',idCardLogoSet);
// const [coincidence,setCoincidence]=useState(false);
// if(idCardLogoSet==ejemplo.id){
//   console.log('coincide en: ',ejemplo.id);
//   setCoincidence(true);
// }
// if(coincidence){
//   setIsCart(false);
//   setCoincidence(false);
//   dispatch(setDeleteCartLogo(null));
// }



//AGREGAR Y SE CREA EL CARRITO */
  const addToCart = (userId, nftId) => {
    console.log(userId , " + ", nftId)
    axios.post('https://nifytigoserver.onrender.com/shop/add', {  userId: userId , nftId: nftId })  //IDS DE CADA USER
      .then(response => {
        console.log('add')
        console.log(response.data.message);
        setCart([...cart]);
      })
      .catch(error => console.error(error));
  };

//SE ELIMINA EL NFT QUE ESTA EN EL CARRITO 
  const deleteToCart = (cartId, nftId) => {

    console.log(nftId)
    axios.delete('https://nifytigoserver.onrender.com/shop/delete',   {   data: {
      cartId: cartId,
      nftId: nftId,
    },}  )
      .then(response => {
      console.log('delete')

        console.log(response.data.message);
        setDeleteStatus([...deleteStatus]);
      })
      .catch(error => console.error(error));  
  };

/*ESTADO PARA QUE CAMBIE EL BOTON Y SUS FUNCIONES */

const [isCart, setIsCart] = useState(false);
const localStorageKey = `cartState_${ejemplo.id}`;

  useEffect(() => {
    const storedIsCart = localStorage.getItem(localStorageKey);
    
    setIsCart(storedIsCart === 'true'); // Parse the stored value to a boolean
  }, [localStorageKey]);

const handleCart = ()=>{
  if(isCart){
    setIsCart(false);
     deleteToCart(`${idCartActual}`,ejemplo.id)   //cart
  } else {
    setIsCart(true);
  addToCart(idUserActual,ejemplo.id)    //user
  }}
 
 
  useEffect(() => {
    localStorage.setItem(localStorageKey, isCart);
  }, [localStorageKey, isCart]);

  return (
    <div>
      {idUserActual&&!isProfileRoute&&<button onClick={handleCart} className='CartCheck'>{isCart ? "✅" : "🛒"}</button>}

      <NavLink to={`/detail/${ejemplo.id}`}>
       
         
        
       
<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
       
      <div>
          <img width="220px" height="220px"src={ejemplo.image}/>
        </div>
        
      </div>
    </div>
    <div className="front">
      
      <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>

      <div className="front-content">
     
         <h1>{ejemplo.name}</h1> 
         <h1>{ejemplo.shop}</h1> 

        <div className="description">
        <div className="description">
          <div className="title">
        <p>  {ejemplo.price}</p> 
          </div>
          <p className="card-footer">
            
          </p>
        </div>
      </div>
    </div>
  </div>
</div> 
</div>
      
     
        
     
        </NavLink>

          </div>
       
   
      );
    }
    
    export default Card;
    

