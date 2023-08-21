import { NavLink, } from "react-router-dom"
import "./Card.css"
import { useState,useEffect} from "react";
import axios from "axios"

function Card(ejemplo) {
/*redux */
 const [cart, setCart] = useState([]);
 const [deleteStatus, setDeleteStatus] = useState(null);

//AGREGAR Y SE CREA EL CARRITO */
  const addToCart = (userId, nftId) => {
    console.log(userId , " + ", nftId)
    axios.post('https://nifytigoserver.onrender.com/shop/add', {  userId: userId , nftId: nftId })
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
     deleteToCart('abbc74bc-279c-415a-ba14-4dee0d80f7c8',ejemplo.id)
  } else {
    setIsCart(true);
  addToCart('81a9c70e-06e3-496e-a0af-e93a364ac424',ejemplo.id)
  }}
 
 
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
    

