import { useSelector } from "react-redux"
import "./Favoritos.css"
import { NavLink } from "react-router-dom"
const Favoritos = ()=>{
    const {myFavorites} = useSelector(state=>state)
return(
  <div className="Cardone" >
   

   
    {
        myFavorites.map((character)=>{
            return(
                // eslint-disable-next-line react/jsx-key
                 <NavLink to={`/detail/${character.id}`}>
                <div >       
                <div className="card">
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                       
                      <div>
                          <img src={character.image}/>
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
                     
                         <h1>{character.name}</h1> 
                        <div className="description">
                        <div className="description">
                          <div className="title">
                        <p> {character.price}</p> 
                          </div>
                          <p className="card-footer">
                            
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                </div></div>
                </NavLink>
            )
        })
    } 
  </div>
)
  
}

export default Favoritos