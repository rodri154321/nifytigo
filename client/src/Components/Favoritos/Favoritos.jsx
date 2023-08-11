import { useSelector } from "react-redux"
import "./Favoritos.css"

const Favoritos = ()=>{
    const {myFavorites} = useSelector(state=>state)
return(
  <div>
    {
        myFavorites.map((character)=>{
            return(
                <div>       
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
            )
        })
    }
  </div>
)
  
}

export default Favoritos