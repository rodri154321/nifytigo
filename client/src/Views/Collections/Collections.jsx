import { NavLink } from "react-router-dom"
import style from "./Collections.module.css"

function Collections(nft) {
  return (
    <div>Collections
        <NavLink to={`/CardContainer/${nft.id}`}>
        <div className={style.card} >
        <div className={style.card2}>

        <h1>name: Brandon</h1>
        <p>description: hola soy Brandon y me gusta hacer paginas web</p>

        <img src="https://marketplace.canva.com/EAEj17Y_k_k/2/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-41B81rUGLAg.jpg" alt="" />

        <h2>price: 1$</h2>
            </div>
        </div>
        </NavLink>
    </div>
  )
}



export default Collections
