import './Purchase_style.css'
import PaypalButton from '../../Components/PayPalButton/PayPalButton';
import Cards from '../../Components/Cards/Cards';
import { useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';

const Purchase=(items)=>{
    const ejemplo = useSelector((state) => state.ejemplo)   //Seguimiento al estado global
    let price=0;
    
    const location = useLocation();
    const searchParams=new URLSearchParams(location.search);
    const id= searchParams.get('id');
    
    const currentItem=ejemplo.filter(card=>card.id==id)

    if (currentItem) {price=parseFloat(currentItem[0].price); console.log('El precio es:',price)}
    let purchaseData={
        idUser:'',
        idNFT:''
    }

    return(
        <div id='purchaseContainer'>
            <div id='detailPurchaseContainer'>
            {currentItem?.map((eje) =>{
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
                
                {currentItem?.map((item)=>{
                    return(
                        <div className='itemList'>
                            <h3 className='itemDescription'>{item.name}</h3>
                            <h3 className='itemDescription'> {item.price}</h3>
                        </div>
                    )
                })}
                <div className='PaypalButtonContainer'>{currentItem &&<PaypalButton purchaseData={''} totalValue={price} invoice={'Informacion de lo que se compro'} ></PaypalButton>}</div>
            </div>
        </div>

    )
    }

export default Purchase;