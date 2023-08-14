import { useSelector, useDispatch } from "react-redux"
import { getCarrito} from "../../Redux/ActionsCarrito";
import { useState } from "react";
import "./Favoritos.css"
import CardDtc from "../CardDct/CardDtc";
import axios from "axios";
import { useEffect } from "react";

const Favoritos = ()=>{
/*
  const cart = useSelector(state => state.getCarritos)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCarrito())
  
        },[dispatch])*/

    const [cart, setCart] = useState({
      id: "",
      price: "",
      status: "",
      userId: "",
      nfts: []
    });
useEffect(() => {
  const fetchData = async () => {
    try {
      const userId = '112c6e93-9118-4755-8984-bca1848ea962';
      const response = (await axios.get(`http://localhost:3001/shop/cart/${userId}`)).data;
      setCart(response);
      console.log(response)

    } catch (error) { 
      
     
      // Manejo de errores
    }
  };

  fetchData();
}, []);




console.log(cart)
return (
  
  

  
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
                     <h1>{cart.status}</h1>
                         <h1>{cart.userId}</h1>
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
                </div>
          {cart && cart.nfts.map((nft, index) => (
        <li key={index}>
          <p>Nombre: {nft.name}</p>
          <p>Precio: {nft.price}</p>
        </li>
      ))}
  </div>
);
  
}

export default Favoritos