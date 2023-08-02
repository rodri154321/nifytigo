/*falta que se haga el la subida del back

import { useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {


    const { id } = useParams();
    const [gameID, setGameID] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
           if (data.name) {
            setGameID(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setGameID({});
     }, [0]);

return (

<div>

          <p>{gameID.id}</p>
           <p>{gameID.name}</p> 
           <img src={gameID.image} alt="" /> 
           <p>description: {gameID.description}</p>
</div>

    );
}*/