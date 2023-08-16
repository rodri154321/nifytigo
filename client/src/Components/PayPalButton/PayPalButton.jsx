import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import './PayPalButton_style.css'
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

//const payPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalButton = (purchaseData)=>{
    let idUserActual=useSelector((state)=>state.clientId); //! Pendiente traer de localStorage

    const handlePay = async (orderR)=>{
        console.log("orden Exitosa",orderR);
        // window.alert('Purchase Complete! Check on myNFTs');

        let buyData={
            idUser:'f11db94d-5cae-426f-a734-143183a204f4',
            idNFT:[]
        }; //ID del comprador mas NFTs comprados
        const responseBack=await axios.post('http://localhost:3001/nft/create',buyData);
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