import { NavLink, } from "react-router-dom"
import "./Card.css"
import { useState} from "react";
import axios from "axios"

import { useEffect } from "react";
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
  const deleteToCart = (cartId, nftId, userId) => {

    console.log(nftId)
    axios.delete('https://nifytigoserver.onrender.com/shop/delete',   {   data: {
      cartId: cartId,
      nftId: nftId,
      userId: userId
    },})
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
  if (storedIsCart) {
    setIsCart(JSON.parse(storedIsCart));
  }
}, [localStorageKey]);

const handleCart = ()=>{
  if(isCart){
    setIsCart(false);
     deleteToCart('bff6a42a-c16d-4932-9618-6c81fdd60f11',ejemplo.id)  //!cartID  CAMBIAR A SU PROPIO ID DEL CART!!!!
  } else {
    setIsCart(true);
  addToCart('b5a12bbc-b81d-4e33-a7fc-5a0eaed85098',ejemplo.id)    //!userID      CAMBIAR A SU PROPIO ID DEL USER!!!!
  }}
 
 
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(isCart));
  }, [localStorageKey, isCart]);



   deleteStatus === 'success' ? (
        <p>¡El NFT se ha eliminado correctamente!</p>
      ) : deleteStatus === 'error' ? (
        <p>Hubo un error al eliminar el NFT.</p>
      ) : (
        <p>Eliminando el NFT...</p>
      )

  return (
    <div>
{
isCart ? (
   <button onClick={handleCart}>❤️</button>
) : (
   <button onClick={handleCart}>🤍</button>
)

}

{/*

   <button onClick={() => deleteToCart('abbc74bc-279c-415a-ba14-4dee0d80f7c8', ejemplo.id)}>eliminar el carrito</button>
  <button onClick={() => addToCart("81a9c70e-06e3-496e-a0af-e93a364ac424", ejemplo.id)}>Agregar al carrito</button>

  */}



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
  )
}



export default Card
