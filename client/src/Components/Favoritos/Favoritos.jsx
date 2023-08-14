
import { useSelector } from "react-redux"
import { useState } from "react";
import "./Favoritos.css"
import axios from "axios";
import { useEffect } from "react";
const Favoritos = ()=>{

    const [cart, setCart] = useState({
	id: "",
	price: "",
	status: "",
	userId:"" ,
	nfts: []
});

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(async()=>{
  userId = '24107191-db0d-4e10-803c-e7ff5aba1c61'
const responce = (await axios.get(`http://localhost:3001/shop/cart`,userId)).data
setCart(responce)
},[])

return(
  <div>
  
                <div>       
                <div className="card">
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                       
                      <div>
                         
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
                     
                         <h1>{cart.name}</h1> 
                        <div className="description">
                        <div className="description">
                          <div className="title">
                        <p> {cart.price}</p> 
                          </div>
                          <p className="card-footer">
                            
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                </div></div>
     
  </div>
)
  
}

export default Favoritos