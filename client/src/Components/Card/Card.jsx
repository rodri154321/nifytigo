
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./Card.css";

function Card(ejemplo) {
  const [isCart, setIsCart] = useState(false);
 // const clientId = localStorage.getItem('clientId');
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
      deleteFromCart('bff6a42a-c16d-4932-9618-6c81fdd60f11', ejemplo.id); // cartID 
    } else {
      addToCart("b5a12bbc-b81d-4e33-a7fc-5a0eaed85098", ejemplo.id); // userID
    }
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, isCart);
  }, [localStorageKey, isCart]);

  return (
    <div>
      <button onClick={handleCart}>{isCart ? "✅" : "🛒"}</button>

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
    

