/*import { ADD_CART, DELETE_CART,GET_CARRITOS } from "./actionTypes"
import axios from "axios"
export const addToCard =(character)=>{
    return {type:ADD_CART, payload: character}
}

export const deleteToCart = (id)=>{
    return {type: DELETE_CART, payload: id}
}



export const getCarrito= (userId)=>{
    return async function(dispatch){
        try{
            const usersData = await axios.get(
                "http://localhost:3001/shop/carti",'e7adfde9-ca36-401b-ab8a-512e33829cae'
                )
            const carritos = usersData.data
            dispatch({type:GET_CARRITOS, payload: carritos})
        }catch(error){
console.log(error)
        }
    
    }
    }

 

//Ahora debemos implementar una action en el cual nos diga que dependiendo el id del usuario no muestre la informacion correspondiente
//como le pasamos algo porn body desde el front?*/