

import { useState } from "react";
import "./Favoritos.css"
import axios from "axios";
import { useEffect } from "react";
import { NavLink, } from "react-router-dom"
const Favoritos = ()=>{
/*  redux
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
      const userId = 'b5a12bbc-b81d-4e33-a7fc-5a0eaed85098';                                              //! PONER SU ID DE USUARIO  
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
}, []);






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

// console.log('Contenido del carro',cart)
return (
  
  

  
                <div className="ContainerFav">  
  
                  <div className="one-div">
                    <NavLink to='/Purchase'>
                      <div className="text"> 
                      <p>{cart.status}</p>

                    <h1>Total Price: {cart.price}</h1>
                      
                    </div>
                   </NavLink>
                   </div>
                   
                    
             <div className="CartsNFt">      
 {cart && cart.nfts.map((nft, index) => (
            <li className="est" key={index}>     
                 
        
            
   
 
        <div className="nft">
         
          <img src={nft.image}/>
          <h2>{nft.name}</h2> 
          
          <NavLink className="link" to={`/Purchase?id=${nft.id}`}  >
         <div className="Btn">
           <h2>Pay: {nft.price}</h2>
         </div>
          </NavLink> 
             
        
         
      </div>
      <bdo className="bn" onClick={() => deleteToCart('bff6a42a-c16d-4932-9618-6c81fdd60f11', nft.id)}>Delete NFT </bdo>   
      {/* // PONER SU ID DE CARRITO!!!!  */}
   </li>
      ))}
                     
         </div> 
                   
  </div>
);
  
}

export default Favoritos