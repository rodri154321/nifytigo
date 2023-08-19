import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import './PayPalButton_style.css'
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

//const payPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalButton = (props)=>{
    console.log('Data Ingresante para comprar en Paypal(idUser+NFT),', props)      //! ID
    
    
    let total=props.totalValue;
    console.log('Precio en el Pbutton:', total)

    const handlePay = async (orderR)=>{ 
        console.log("orden Exitosa",orderR);
        // window.alert('Purchase Complete! Check on myNFTs');
        console.log('Nfts a guardar(USER+NFTS)',props.purchaseData)
        props.purchaseData.idNFT.map (async (nftID)=>{
            console.log('Guardando el nft:',nftID)
            let buyData={
                userId:props.purchaseData.idUser,
                nftId:nftID
            }
            console.log('Posteando al back:',buyData)
            /*registro de compras */
            const responseBack = await axios.post('http://localhost:3001/profile',buyData); 

             console.log(responseBack.data);           //!Guardar los NFTs comprados en la base de datos
    })

       
       
    }
        
        
                   //!Guardar los NFTs comprados en la base de datos
     
    

    return(

            <PayPalButtons className='customPaypalButton'
                style={{
                    layout: "horizontal",
                    color: "blue",
                    shape: "rect",
                    label: "buynow",
                    tagline: "false",
                    
                }}
                createOrder={(data,actions)=>{
                    
                    return actions.order.create({
                        purchase_units:[{
                            description: props.invoice,
                            amount:{
                                value:props.totalValue.toFixed(2)
                            }
                        }]
                    })
                }}
                onApprove={async(data,actions)=>{
                    const order = await actions.order?.capture();
                    handlePay(order)
                }}
            />
    )
}

export default PaypalButton;

//https://developer.paypal.com/docs/checkout/standard/customize/single-page-app/
//