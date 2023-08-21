

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
<<<<<<< HEAD
      const userId = "b5a12bbc-b81d-4e33-a7fc-5a0eaed85098";
=======
      const userId = '81a9c70e-06e3-496e-a0af-e93a364ac424';
>>>>>>> 42e2dd259d65a989f35d4277c0a0b70813cafebf
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

<<<<<<< HEAD
  console.log('EN EL CARTID, el id es:',cartId, 'y el user id es:',nftId)
=======
  console.log(cartId)
>>>>>>> 42e2dd259d65a989f35d4277c0a0b70813cafebf
  axios.delete('https://nifytigoserver.onrender.com/shop/delete',   {   data: {
    cartId: cartId,
    nftId: nftId,
  },}  )
    .then(response => {
    

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
      <bdo className="bn" onClick={() => deleteToCart('abbc74bc-279c-415a-ba14-4dee0d80f7c8', nft.id)}>Delete NFT </bdo>   
      {/* // PONER SU ID DE CARRITO!!!!  */}
   </li>
      ))}
                     
         </div> 
                   
  </div>
);
  
}

export default Favoritos