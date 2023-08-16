import { useSelector, useDispatch } from "react-redux"
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
        const [deleteStatus, setDeleteStatus] = useState(null);

    const [cart, setCart] = useState({
      id: "",
      price: "",
      image:"",
      status: "",
      userId: "",
      nfts: []
    });
    
useEffect(() => {
  const fetchData = async () => {
    try {
      const userId = '2fcf8b23-6c07-416e-bb6c-99cb1f797dc2';
      const response = (await axios.get(`https://nifytigoserver.onrender.com/shop/cart/${userId}`)).data;
      if(response){
      setCart(response);
      console.log(response)
    }else{
      return setCart({})
    }

    } catch (error) { 
      
     
      //  alert('No hay personajes con ese ID');
    }
  };

  fetchData();
}, [cart]);
/*
useEffect(() => {
  const fetchData = async () => {
    try {
      const userId = '112c6e93-9118-4755-8984-bca1848ea962';
      const response = (await axios.get(`http://localhost:3001/shop/cart/${userId}`)).data;
      if (response) {
        setCart(response);
        console.log(response);
      } else {
        setCart({});
      }
    } catch (error) {
      // alert('No hay personajes con ese ID');
    }
  };

  fetchData();
}, []); // Pasamos un arreglo vacío como <dependencia></dependencia>*/


/*
useEffect(()=>{
  
setCart({})
},[cart])*/





/*
useEffect(async() => {
  const userId = '112c6e93-9118-4755-8984-bca1848ea962';
  const response =  (await axios.get(`http://localhost:3001/shop/cart/${userId}`)).data;
  if(response){setCart(response)}
}, [cart]);
*/
const deleteToCart = (cartId, nftId) => {

  console.log(cartId)
  axios.delete('https://nifytigoserver.onrender.com/shop/delete',   {   data: {
    cartId: cartId,
    nftId: nftId,
  },}  )
    .then(response => {
    console.log('delete')

      console.log(response.data.message);
      setDeleteStatus([...deleteStatus]);
    })
    .catch(error => console.error(error));  
};

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
            <button onClick={() => deleteToCart('11697b75-34df-46ae-97b1-1ccc69181c20', nft.id)}>eliminar Nft</button>

          <img src={nft.image}/>
          <p>Nombre: {nft.name}</p>
          <p>Precio: {nft.price}</p>
        </li>
      ))}
  </div>
);
  
}

export default Favoritos