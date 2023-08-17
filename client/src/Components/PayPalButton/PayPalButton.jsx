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
        console.log('Nfts a guardar',props.purchaseData)
        const responseBack = await axios.post('http://localhost:3001/',buyData);
        console.log(responseBack.data);
    }

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
                                value:props.totalValue
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