import axios from "axios"
export const {GET_USER_ID} = "GET_USER"

export const getUserId = (id) => {
    return async (dispatch) => {
      try {
        //const response = await axios.get(`http://localhost:3001/users/${id}`);
        //const response = await axios.get(`https://nifytigoserver.onrender.com/users/${id}`);
        console.log(response.data); // Agrega esta línea para verificar los datos de la respuesta
        return dispatch({
          type: GET_USER_ID,
          payload: response.data,
        });
      } catch (error) {
        console.error(error); // Agrega esta línea para mostrar errores en la consola
      }
    };
  }
  