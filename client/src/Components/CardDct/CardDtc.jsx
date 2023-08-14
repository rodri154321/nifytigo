import styled from "./CardDtc.module.css"
import { Link } from 'react-router-dom'



const CardDtc =(props)=>{
    return(
        
        <div   className={styled.card}>
             

    
            <p  className={styled.LetraCards}>Name:{props.name}</p>
            <p  className={styled.LetraCards}>Username:{props.username}</p>
       

        </div>
    )
}

export default CardDtc