

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
      const userId = "9b36566a-573e-4f44-a19f-41999b4f7251";
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

                    <h1>Price Total: {cart.price}</h1>
                      
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
      <bdo className="bn" onClick={() => deleteToCart('f1341af7-b67b-4822-b9c5-10dd66a79578', nft.id)}>delete Nft </bdo>
   </li>
      ))}
                     
         </div> 
                   
  </div>
);
  
}

export default Favoritos