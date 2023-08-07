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
        <h2>price: {ejemplo.price}</h2>
        <h3>user: {ejemplo.name}</h3>
       {/* <h3>categories: {ejemplo.categories && ejemplo.categories.join(", ")}</h3>
        <h4>Categories: {ejemplo.categories.map((category) => category).join("   ")}</h4>
        <h4>Categories: {ejemplo.categories && ejemplo.categories.length > 0 ? ejemplo.categories.join(", ") : "Sin categorías disponibles"}</h4>*/}
        <h4>Categorías: {ejemplo.categories && ejemplo.categories.length > 0 ? ejemplo.categories.map(category => category.name).join(", ") : "Sin categorías disponibles"}</h4>
{console.log (ejemplo.categories)}
        
          </div>
        </div>
        </NavLink>
        <h1>{ejemplo.name}</h1>
      <h2>price: {ejemplo.price}</h2>
        
    </div>
  )
}



export default Card
