import axios from "axios";
import { GET_CATEGORIES } from "./actionTypes"

export const getCategories = ()=> {
    return async function (dispatch){
        // const response = await axios.get(`http://localhost:3001/categories`)
        const response = await axios.get(`https://nifytigoserver.onrender.com/categories`)

        return dispatch({
            type: GET_CATEGORIES ,
            payload: response.data
        })
    }
 }
