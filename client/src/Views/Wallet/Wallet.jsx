import './Wallet.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Wallet = () =>{
const id=localStorage.getItem('clientId');
console.log('Wallet| userId: ',id);
const[userName,setUserName]=useState('');
const[lastName,setLastName]=useState('');


useEffect(()=>{
const getData=async()=>{
    const response=await axios.get(`https://nifytigoserver.onrender.com/users/${id}`);
    console.log()
    setUserName(response.data.name);
    setLastName(response.data.lastName)   
}
getData();
},[])

    return(
        <div className='WalletContainer'>
            {userName&&<div className='WelcomeMessageContainer'><h1 className='Message'>Hello there {userName} {lastName}!</h1></div>}
            <div className='FundsBox'>
                <h1 className='FundsMessage'>My balance:</h1>
                <h2 className='Money'>XXX $</h2>
            </div>
            <div className='PayOption'>
                <input className='inputPaypal'></input>
                <button className='Withdraw'>Withdraw Funds</button>
                </div>
        </div>
        
    )
}

export default Wallet;