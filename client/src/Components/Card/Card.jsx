import { NavLink } from "react-router-dom"
import "./Card.css"
import axios from 'axios';
import  { useState } from 'react';


function Card(ejemplo) {

  const [cart, setCart] = useState([]);

  

  const addToCart = (userId, nftId) => {
    axios.post('http://localhost:3001/shop/add', {  userId: userId , nftId: nftId })
      .then(response => {
        console.log(response.data.message);
        setCart([...cart]);
      })
      .catch(error => console.error(error));
  };

  


  return (
    <div>

      {/*${nft.id}
      <h1>id: {ejemplo.id}</h1> */}
  

        <button onClick={() => addToCart("8b9815f2-0a2d-4b97-b8c3-cc06e8730a15", ejemplo.id)}>Agregar al carrito</button>
      

        <NavLink to={`/detail/${ejemplo.id}`}>
       
<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
       
      <div>
          <img src={ejemplo.image}/>
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
  )
}



export default Card



/*  <h3>{ejemplo.name}</h3>
        <div>
          <img src={ejemplo.image}/>
        </div>
        <h2>PRICE: {ejemplo.price}</h2>
      */