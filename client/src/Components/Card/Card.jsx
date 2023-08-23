
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom"
import "./Card.css";

function Card(ejemplo) {
/*redux */
const isProfileRoute = location.pathname === '/Profile' || location.pathname ==='/Purchase';
 const idUserActual=localStorage.getItem("clientId");
 const idCartActual=localStorage.getItem("cartId");     

const [isCart, setIsCart] = useState(false);
const localStorageKey = `cartState_${ejemplo.id}`;

  useEffect(() => {
    const storedIsCart = localStorage.getItem(localStorageKey);
    
    setIsCart(storedIsCart === 'true'); // Parse the stored value to a boolean
  }, [localStorageKey]);

  const addToCart = async (userId, nftId) => {
    try {
      await axios.post('https://nifytigoserver.onrender.com/shop/add', { userId, nftId });
      setIsCart(true);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFromCart = async (cartId, nftId) => {
    try {
      await axios.delete('https://nifytigoserver.onrender.com/shop/delete', {
        data: {
          cartId,
          nftId,
        },
      });
      setIsCart(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCart = () => {
    if (isCart) {
      deleteFromCart(idCartActual, ejemplo.id); // cartID 
    } else {
      addToCart(idUserActual, ejemplo.id); // userID
    }
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, isCart);
  }, [localStorageKey, isCart]);

  return (
    <div>
      {idUserActual&&!isProfileRoute&&<button onClick={handleCart}>{isCart ? "✅" : "🛒"}</button>}

      <NavLink to={`/detail/${ejemplo.id}`}>
       
         
        
       
<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
       
      <div>
          <img width="220px" height="220px"src={ejemplo.image}/>
          {/* {console.log(ejemplo.imagen)} */}
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

        <div className="descriptionN">
        <div className="descriptionN">
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