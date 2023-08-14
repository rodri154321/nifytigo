import { NavLink, } from "react-router-dom"
import "./Card.css"
import { useState} from "react";
import axios from "axios"
function Card(ejemplo) {

 const [cart, setCart] = useState([]);

  

  const addToCart = (userId, nftId) => {
    console.log(userId)
    axios.post('http://localhost:3001/shop/add', {  userId: userId , nftId: nftId })
      .then(response => {
        console.log(response.data.message);
        setCart([...cart]);
      })
      .catch(error => console.error(error));
  };



  return (
    <div>

      
 
  <button onClick={() => addToCart('24107191-db0d-4e10-803c-e7ff5aba1c61', ejemplo.id)}>Agregar al carrito</button>
      

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