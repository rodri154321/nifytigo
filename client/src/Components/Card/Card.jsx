import { NavLink, Link } from "react-router-dom"
import "./Card.css"
import { useState} from "react";
import { useEffect } from "react";
import axios from "axios"
function Card(ejemplo) {

 const [cart, setCart] = useState([]);
 const [isCart, setIsCart] = useState(false);

 const [deleteStatus, setDeleteStatus] = useState(null);

 const localStorageKey = `cartState_${ejemplo.id}`;

  

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
  const deleteToCart = (cartId, nftId) => {

    console.log(cartId)
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

  useEffect(() => {
    const storedIsCart = localStorage.getItem(localStorageKey);
    if (storedIsCart) {
      setIsCart(JSON.parse(storedIsCart));
    }
  }, [localStorageKey]);
  
  const handleCart = ()=>{
    if(isCart){
      setIsCart(false);
       deleteToCart('11697b75-34df-46ae-97b1-1ccc69181c20',ejemplo.id)
    } else {
      setIsCart(true);
    addToCart('2fcf8b23-6c07-416e-bb6c-99cb1f797dc2',ejemplo.id)
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
  <button onClick={() => deleteToCart('11697b75-34df-46ae-97b1-1ccc69181c20', ejemplo.id)}>eliminar el carrito</button>

  <button onClick={() => addToCart('2fcf8b23-6c07-416e-bb6c-99cb1f797dc2', ejemplo.id)}>Agregar al carrito</button>
*/
}

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

        <Link to='/Favorites'>Fav</Link>

    </div>
  )
}



export default Card



