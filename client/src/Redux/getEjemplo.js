import axios from "axios"
 import { GET_EJEMPLO } from "./actionTypes"

 export const getEjemplo = ()=> {
    return async function (dispatch){
        const response = await axios.get(`https://nifytigoserver.onrender.com/nft`)
        //const response = await axios.get(`https://nifytigo.onrender.com/nft`)
        console.log('Todas las cards traidas del back:',response.data);
        return dispatch({
            type: GET_EJEMPLO,
            payload: response.data
        })
    }
 }