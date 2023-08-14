import axios from "axios";
import { POST_NFT } from "./actionTypes";

export const postNft = (formData) => {
  return async function (dispatch) {
    try {
      //const response = await axios.post(`http://localhost:3001/nft/create`, formData);
      const response = await axios.post(`https://nifytigoserver.onrender.com/nft/create`, formData);

      dispatch({ type: POST_NFT, payload: response.data });

      return response.data; 
    } catch (error) {

      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };
};
 