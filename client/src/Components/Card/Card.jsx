import { NavLink } from "react-router-dom"
import style from "./Card.module.css"

function Card(ejemplo) {
  return (
    <div>
      {/*${nft.id}
      <h1>id: {ejemplo.id}</h1> */}
        <NavLink to={`/detail/${ejemplo.id}`}>
        <div className={style.card} >
        <div className={style.card2}>

        
        <h1>name: {ejemplo.name}</h1>
        <p>description: {ejemplo.description}</p>
        <div>
          <img src={ejemplo.image}/>
        </div>
        <h2>price: {ejemplo.price}</h2>
        <h3>user: {ejemplo.name}</h3>
            </div>
        </div>
        </NavLink>
    </div>
  )
}



export default Card
