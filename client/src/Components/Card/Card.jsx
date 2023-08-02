import { NavLink } from "react-router-dom"
import style from "./Card.module.css"

function Card(ejemplo) {
  return (
    <div>
      {/*${nft.id} */}
        <NavLink to={`/detail/${ejemplo.id}`}>
        <div className={style.card} >
        <div className={style.card2}>

        <h1>id: {ejemplo.id}</h1>
        <p>name: {ejemplo.name}</p>
        <p>description: {ejemplo.description}</p>

        <img src={ejemplo.image}/>
            </div>
        </div>
        </NavLink>
    </div>
  )
}



export default Card
