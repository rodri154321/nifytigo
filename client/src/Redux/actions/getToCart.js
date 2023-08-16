import { GET_CART } from "../actionTypes";
import axios from "axios"

 export const getToCart = (id)=>{
    return async function(dispatch){
        try{
            const countriesData = await axios.get(
                `http://localhost:3001/shop/cart/${id}`
                )
            const countries = countriesData.data
            dispatch({type:GET_CART, payload: countries})
        }catch(error){
console.log(error)
        }
    
    }
    }