import axios from "axios"
import {GET_USER_ID, GET_NFTS_FOR_USER} from "./actionTypes"

// Cambios en getUserIdAsync
export const getUserIdAsync = (loger, idUser) => {
  return async (dispatch) => { // Usa esta estructura para tus acciones asíncronas
    try {
      const response = await axios.get(`https://nifytigoserver.onrender.com/users/${idUser}`);
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
export const getNftsForUser = (idUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://nifytigoserver.onrender.com/nfts?userId=${idUser}`);
      dispatch({
        type: GET_NFTS_FOR_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
  