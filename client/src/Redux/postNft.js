import axios from "axios";
import { POST_NFT } from "./actionTypes"

export const postNft = (formData) => {
  return async function (dispatch) {
    try {
      const idUs = localStorage.getItem('clientId');

      const userResponse = await axios.get(`https://nifytigoserver.onrender.com/users/${idUs}`);
      const { email, name } = userResponse.data;

      const nftResponse = await axios.post(`https://nifytigoserver.onrender.com/nft/create/${email}/${name}`, formData);

      dispatch({ type: POST_NFT, payload: nftResponse.data });

      return nftResponse.data; 
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };
};






























// import axios from "axios";
// import { POST_NFT } from "./actionTypes";

// export const postNft = (formData) => {
//   return async function (dispatch) {
//     try {
//       //const response = await axios.post(`http://localhost:3001/nft/create`, formData);
//       const idUs = localStorage.getItem('clientId')
//       console.log(idUs)


      
//       const emailUser = (await axios.get(`https://nifytigoserver.onrender.com/users/${idUs}`)).data
//       console.log(emailUser);
//       const {email} = emailUser; 
//       console.log(email);
//       const response = await axios.post(`https://nifytigoserver.onrender.com/nft/create/${email}`, formData);

//       dispatch({ type: POST_NFT, payload: response.data });

//       return response.data; 
//     } catch (error) {

//       console.error("Error al enviar el formulario:", error);
//       throw error;
//     }
//   };
// };



 