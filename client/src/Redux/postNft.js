import axios from "axios";
import { POST_NFT } from "./actionTypes";

export const postNft = (formData) => {
  return async function (dispatch) {
    try {
     // const response = await axios.post(`https://nifytigoserver.onrender.com/nft/create`, formData);
      const idUs = localStorage.getItem('clientId')
      
      const emailAndName = (await axios.get(`https://nifytigo-49k6.onrender.com/users/${idUs}`)).data
     
      const {email} = emailAndName; 
      
      const response = await axios.post(`https://nifytigo-49k6.onrender.com/nft/create/${email}`, formData);

       dispatch({ type: POST_NFT, payload: response.data });

      return response.data; 
    } catch (error) {

      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };
};



 