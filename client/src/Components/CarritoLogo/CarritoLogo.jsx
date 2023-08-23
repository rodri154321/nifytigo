


import "./CarritoLogo.css" // Asegúrate de tener este archivo CSS creado

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CarritoLogo = () => {

const idUserActual=localStorage.getItem("clientId");
const [idCartActual,setIdCartActual]=useState('');     
useEffect(()=>{
  const getCart= async()=>{
    let response=await (await axios.get(`https://nifytigoserver.onrender.com/shop/cart/${idUserActual}`)).data.id;
    const idCartActual=localStorage.setItem("cartId",response);
    console.log('elCartActual es:',localStorage.getItem("cartId"));

  }
  getCart();
},[]);

  return (
    
    <div className="logo-container">
       
            {idUserActual && <NavLink to={`/Carritos/${idUserActual}`}> 
             <img src="https://i.pinimg.com/1200x/1b/3b/d5/1b3bd5af30cb31cc4bc842b38e3ce459.jpg" alt="Logo" className="logo-image" />
             </NavLink>}
        
      <div>
        <h1>{}</h1>
        <h3>{}</h3>
      </div>
      
        
      
    </div>
  );
};

export default CarritoLogo;
