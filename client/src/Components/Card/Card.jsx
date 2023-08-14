import { NavLink, } from "react-router-dom"
import "./Card.css"
import { useState} from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
function Card(ejemplo) {

 const [cart, setCart] = useState([]);
 /*const dispatch  = useDispatch()
 const [isCart, setIsCart] = useState(false);*/

 const [deleteStatus, setDeleteStatus] = useState(null);


  

  const addToCart = (userId, nftId) => {
    console.log(userId , " + ", nftId)
    axios.post('http://localhost:3001/shop/add', {  userId: userId , nftId: nftId })
      .then(response => {
        console.log('add')
        console.log(response.data.message);
        setCart([...cart]);
      })
      .catch(error => console.error(error));
  };
  const deleteToCart = (cartId, nftId) => {

    console.log(cartId)
    axios.delete('http://localhost:3001/shop/delete',   {   data: {
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
/*
  const handleCart = ()=>{
    if(isCart){
      setIsCart(false);
      dispatch(deleteToCart(ejemplo.id))
    } else {
      setIsCart(true);
      dispatch(addToCart(ejemplo))
    }}*/
   

  return (
    <div>



  <button onClick={() => deleteToCart('81a9c70e-06e3-496e-a0af-e93a364ac424', ejemplo.id)}>eliminar el carrito</button>

  {deleteStatus === 'success' ? (
        <p>¡El NFT se ha eliminado correctamente!</p>
      ) : deleteStatus === 'error' ? (
        <p>Hubo un error al eliminar el NFT.</p>
      ) : (
        <p>Eliminando el NFT...</p>
      )}

  <button onClick={() => addToCart("81a9c70e-06e3-496e-a0af-e93a364ac424", ejemplo.id)}>Agregar al carrito</button>



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
