import { NavLink, Link } from "react-router-dom"
import "./Card.css"
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { addFavorite, deleteFavorite } from "../../Redux/ActionsCarrito";
function Card({id,name,price,image}) {

 //const [cart, setCart] = useState([]);

  

  /*const addToCart = (userId, nftId) => {
    console.log(userId)
    axios.post('http://localhost:3001/shop/add', {  userId: userId , nftId: nftId })
      .then(response => {
        console.log(response.data.message);
        setCart([...cart]);
      })
      .catch(error => console.error(error));
  };

  <Carrito params={ejemplo}/>*/

  const dispatch = useDispatch(); 
  const myFavorites = useSelector(state => state.myFavorites)

  const [isFav, setIsFav] = useState(false);
const handleFavorite = ()=>{
if(isFav){
  setIsFav(false);
  dispatch(deleteFavorite(id))
} else {
  setIsFav(true);
  dispatch(addFavorite({id,name,price,image}))
}}

useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [myFavorites]);


  return (
    <div>

      {/*${nft.id}
      <h1>id: {ejemplo.id}</h1> */}
 { 
<div>
{  
isFav ? (
   <button onClick={handleFavorite}>Borrar del carrito</button>
) : (
   <button onClick={handleFavorite}>poner al carrito</button>
)
}  
</div>}
{  /* <button onClick={() => addToCart(ejemplo.userId, ejemplo.id)}>Agregar al carrito</button>*/}
      

        <NavLink to={`/detail/${id}`}>
       
<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
       
      <div>
          <img src={image}/>
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
     
         <h1>{name}</h1> 
        <div className="description">
        <div className="description">
          <div className="title">
        <p>  {price}</p> 
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



/*  <h3>{ejemplo.name}</h3>
        <div>
          <img src={ejemplo.image}/>
        </div>
        <h2>PRICE: {ejemplo.price}</h2>
      */