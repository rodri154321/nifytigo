import axios from "axios";
import { POST_NFT } from "./actionTypes";

export const postNft = (formData) => {
  return async function (dispatch) {
    try {
<<<<<<< HEAD
      const response = await axios.post(`http://localhost:3001/nft/create`, formData);
      //const response = await axios.post(`https://nifytigo.onrender.com/nft/create`, formData);
=======
      //const response = await axios.post(`http://localhost:3001/nft/create`, formData);
      const response = await axios.post(`https://nifytigoserver.onrender.com/create`, formData);
>>>>>>> 62e7e8e5a4868706b48a702db2c84be7faea577b

      // Aquí puedes realizar el manejo de la respuesta
      // Por ejemplo, podrías actualizar el estado del Redux con los datos recibidos
      dispatch({ type: POST_NFT, payload: response.data });

      return response.data; // Puedes devolver la respuesta para usarla en el componente si es necesario
    } catch (error) {
      // Manejo de errores
      console.error("Error al enviar el formulario:", error);
      throw error; // Puedes relanzar el error para que el componente pueda manejarlo también
    }
  };
};
 