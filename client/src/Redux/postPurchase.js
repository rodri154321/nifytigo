import axios from "axios";
import { BUY_NFT, POST_NFT } from "./actionTypes";

export const postPurchase = (buyData)=>{
    return async function(dispatch){
        try{
            const response=await axios.post('http://localhost:3001/nft/create',buyData);
            dispatch({type:BUY_NFT,payload:response.data});
        }
        catch(error){
            throw error;
        }
    }
}