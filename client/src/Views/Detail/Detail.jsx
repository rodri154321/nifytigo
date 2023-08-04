//falta que se haga el la subida del back

import { useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import  "./Detail.css"

export default function Detail() {


    const { id } = useParams();
    const [gameID, setGameID] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/nft/${id}`).then(({ data }) => {
           if (data.name) {
            setGameID(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setGameID({});
     }, [id]);

return (

<div id="detail">
   <div id='detailOne'>
      <div id='content-box'>
      <span id="card-title"> {gameID.name}</span>
 
    <br /><br /><br /><br /><br /><br /><br />
      <p id="card-content">
              {gameID.description}
          </p>
          <span id="see-more"> <p>{gameID.price}</p> See More</span>
          <div id="date-box">
       
          <img src={gameID.image} alt="" /> 
      
      </div>
           
          
      </div>
   </div>
</div>

    );
}
/*<div class="parent">
  <div class="card">
      <div class="content-box">
          <span class="card-title">3D Card</span>
          <p class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <span class="see-more">See More</span>
      </div>
      <div class="date-box">
          <span class="month">JUNE</span>
          <span class="date">29</span>
      </div>
  </div>
</div> */