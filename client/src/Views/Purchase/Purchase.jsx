import './Purchase_style.css'
import PaypalButton from '../../Components/PayPalButton/PayPalButton';
import Cards from '../../Components/Cards/Cards';
import { useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Purchase=(items)=>{
    const ejemplo = useSelector((state) => state.ejemplo)   //Seguimiento al estado global
    const [carritoDataServer,setcarritoDataServer]=useState([]);
    const [total,setTotal]=useState(0);
    // let price=0;
    let totalValue=0;
    // let idUserActual=useSelector((state)=>state.clientId); //! Pendiente traer de localStorage
    let idUserActual='f11db94d-5cae-426f-a734-143183a204f4';
    
    const location = useLocation();
    const searchParams=new URLSearchParams(location.search);
    const id= searchParams.get('id');
    let purchaseData={idUser:'',idNFT:[]};
    let currentItems='';
    

    if(id){                         //! Si se comprará card directo sin carrito
        console.log('Params de solo una card')
        currentItems=ejemplo.filter(card=>card.id==id)
        console.log(currentItems);
        // if (currentItems) {price=parseFloat(currentItems[0].price); console.log('El precio es:',price)}
        purchaseData={  
            idUser:idUserActual,
             idNFT:[]
        }
        if (currentItems) {totalValue=parseFloat(currentItems[0].price); console.log('El precio es:',totalValue)}
    }
    else{                           //! Se comprará desde carrito
        currentItems=carritoDataServer;
        carritoDataServer.map((items)=>{
            totalValue=totalValue+parseFloat(items.price);        //!Acumulación de precios
            console.log('El valor total a pagar es:',totalValue)
        })
        
        // console.log('Compra del carrito 2 :',currentItems)
    }

    useEffect(()=>{                 //! Al montar el componente
        const getData = async()=>{
            try{
                let response = (await axios.get(`https://nifytigoserver.onrender.com/shop/cart/${'9b36566a-573e-4f44-a19f-41999b4f7251'}`)).data.nfts;
                console.log('Datos del carrito traidos desde el server',response)
                setcarritoDataServer(response);
            }
            catch(error){}
            }
        getData();
        
    },[])

    /*Nfts compradas */
    const [boughtNFTs, setBoughtNFTs] = useState([]);

    const buyNFT = (nftId) => {
        axios.post(`https://nifytigoserver.onrender.com/profile/9b36566a-573e-4f44-a19f-41999b4f7251/bought-nfts`, { nftId })
          .then(response => {
            console.log(response.data.message);
            // Actualiza la lista de NFTs compradas
            setBoughtNFTs([...boughtNFTs, response.data.boughtNFT]);
          })
          .catch(error => {
            console.error(error);
          });
      };

    return(
        <div id='purchaseContainer'>
            <div id='detailPurchaseContainer'>
            {currentItems?.map((eje) =>{
                purchaseData.idNFT.push(eje.id)
                return(
                        <Cards
                        key={eje.id}
                        id={eje.id}
                        name={eje.name}
                        description={eje.description}
                        image={eje.image}
                        price={eje.price}
                        user={eje.user}
                        categories={eje.categories}
                        />
                )
            })}
            </div>

            <div id='paymentsContainer'>
                <h1 id='title'>Purchase detail</h1>
                <hr id='titleSeparator'></hr>
                <div className='subtitle'><h2 className='subtitleItem'>Item Name</h2><h2 className='subtitleItem'>Price</h2></div>
                
                {currentItems?.map((item)=>{
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div className='itemList'>
                            <h3 className='itemDescription'>{item.name}</h3>
                            <h3 className='itemDescription'> {item.price}</h3>
                        </div>
                    )
                })}
                <hr id='titleSeparator'></hr>
                <div className='subtitle'><h2 className='subtitleItem'>Total Price</h2><h2 className='subtitleItem'>{totalValue}</h2></div>
                
                <div className='PaypalButtonContainer' >
                    {/*boton nfts compradas */}
                    <button  onClick={buyNFT}>

                    {totalValue &&<PaypalButton purchaseData={purchaseData} totalValue={totalValue} invoice={'Comprando NFTS'} > </PaypalButton>}
                    </button>
                    </div>
            </div>
        </div>

    )
    }

export default Purchase;

//Email test:
// sb-shaik27022013@personal.example.com
// *K)wk1FJ