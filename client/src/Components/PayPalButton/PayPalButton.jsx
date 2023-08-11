import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import './PayPalButton_style.css'
//const payPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalButton = (props)=>{

    const handlePay=(orderR)=>{
        console.log("orden Exitosa",orderR);
        // window.alert('Purchase Complete! Check on myNFTs');
    }

    return(

            <PayPalButtons className='customPaypalButton'
                style={{
                    layout: "horizontal",
                    color: "blue",
                    shape: "pill",
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