//falta que se haga el la subida del back

import { useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import  "./Detail.css"

export default function Detail() {
  const [gameID, setGameID] = useState({})
   
  const { id } = useParams();
  



   
    
    useEffect(() => {
<<<<<<< HEAD
        axios(`https://nifytigo.onrender.com/nft/${id}`).then(({ data }) => {
=======
        //axios(`http://localhost:3001/nft/${id}`).then(({ data }) => {
         axios(`https://nifytigo.onrender.com/nft/${id}`).then(({ data }) => {
>>>>>>> 9d9e09631200fea8c11c6eb8c17d1ee78d1a10cf
           if (data.name) {
            setGameID(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setGameID({});
     }, [id]);

return (
 <div className='containerDetail'>

 
<div className="detail">
    
   <img src={gameID.image} alt="" /> 
  <div className="detail__content">
    <p className="detail__title"> {gameID.name}</p>
    <p>{gameID.id}</p>
    <p>{gameID.idUser}</p>
    <p className="detail__description">{gameID.description}</p>
    <p>
        
     {gameID.categories && gameID.categories.length > 0 ? gameID.categories.map(category => category.name).join(", ") : "Sin categorías disponibles"}
    </p>
    <button className="detail__button">{gameID.price}</button>
  </div>
  <div>
   <button>
   <ul>
          {/*gameID.map(game=> (
            <li key={gameID.id}>
              {gameID.name} - ${gameID.price}
              <button onClick={() => addToCart(game)}>Agregar al carrito</button>
            </li>
          ))*/}
          </ul>
   </button>
  </div>
  
</div>
</div>
    );
}
/*
 */