import axios from "axios";
import { GET_CATEGORIES } from "./actionTypes"

export const getCategories = ()=> {
    return async function (dispatch){
<<<<<<< HEAD
        const response = await axios.get(`http://localhost:3001/categories`)
        //const response = await axios.get(`https://nifytigo.onrender.com/categories`)
=======
        //const response = await axios.get(`http://localhost:3001/categories`)
        const response = await axios.get(`https://nifytigoserver.onrender.com/categories`)
>>>>>>> 62e7e8e5a4868706b48a702db2c84be7faea577b
        return dispatch({
            type: GET_CATEGORIES ,
            payload: response.data
        })
    }
 }
