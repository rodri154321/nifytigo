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

        <div>
          <img src={ejemplo.image}/>
        </div>
        
        {/* <h3>user: {ejemplo.user.name}</h3> */}
            </div>
        </div>
        </NavLink>
        <h1>{ejemplo.name}</h1>
      <h2>price: {ejemplo.price}</h2>
        
    </div>
  )
}



export default Card
