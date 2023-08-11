
import { useSelector } from "react-redux"



const Carrito = () => {
  const {myFavorites} = useSelector(state=>state)
  return(
    <div >
      {
          myFavorites.map((character)=>{
              return(
                  // eslint-disable-next-line react/jsx-key
                  <div>      
                  <div className="card"   display="flex" >
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
};

export default Carrito;


/*function Carrito() {
  return (
    <div>Carrito

    </div>
  )
}


export default Carrito*/


/* <div>
        <h2>Productos Disponibles</h2>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => getToCart(product.id)}> <h1>ver</h1></button>
            </li>
            
          ))}
        </ul>
        
      </div> */