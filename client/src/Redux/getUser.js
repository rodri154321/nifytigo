import axios from "axios"
import {GET_USER_ID, GET_NFTS_FOR_USER} from "./actionTypes"

// Cambios en getUserIdAsync
export const getUserIdAsync = (loger, idUser) => {

  return async (dispatch) => { // Usa esta estructura para tus acciones asíncronas
    try {
      const response = await axios.get(`https://nifytigo-49k6.onrender.com/users/${idUser}`);
      dispatch({
        type: GET_USER_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Cambios en getNftsForUser
export const getNftsForUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://nifytigo-49k6.onrender.com/users/nfts/${id}`);
      console.log(response.data)
      dispatch({
        type: GET_NFTS_FOR_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
  