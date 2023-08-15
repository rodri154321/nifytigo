import axios from "axios";

export const LOGIN = 'LOGIN';

export const login = (iduser) => {
    return async function (dispatch) {
      try {
      //const response = await axios.post("http://localhost:3001/login", user);
      const response = await axios.post("https://nifytigoserver.onrender.com/login", iduser);
        return  dispatch({type: LOGIN, payload: response.data});
      } catch (error) {
        throw error;
      }
      
    };
};
