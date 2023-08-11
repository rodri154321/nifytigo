import './Purchase_style.css'
import PaypalButton from '../../Components/PayPalButton/PayPalButton';
import Cards from '../../Components/Cards/Cards';
import { useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';

const Purchase=(items)=>{
    const ejemplo = useSelector((state) => state.ejemplo)   //Seguimiento al estado global
    
    let price=15;

    return(
        <div id='purchaseContainer'>
            <div id='detailPurchaseContainer'>
            {ejemplo?.map((eje) =>{
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
                <h1 id='title'>MAKE "NFT NAME" YOURS NOW</h1>
                <PaypalButton  totalValue={price} invoice={'Informacion de lo que se compro'}></PaypalButton>
            </div>
        </div>

    )
    }

export default Purchase;