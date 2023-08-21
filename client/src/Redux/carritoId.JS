import { CART_ID } from "./actionTypes";
import axios from "axios";

export const CartId = (id) => {

    return async function (dispatch) {
      // eslint-disable-next-line no-useless-catch
      try {
      const response = await axios.get(`https://nifytigoserver.onrender.com/shop/cart/${id}`);
       console.log(response)
        return  dispatch({type: CART_ID, payload: response.data});
       
      } catch (error) {
        throw error;
      }
      
    };
};