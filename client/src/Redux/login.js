import axios from "axios";

export const LOGIN = 'LOGIN';

export const login = (iduser) => {
    return async function (dispatch) {
      // eslint-disable-next-line no-useless-catch
      try {
         const response = (await axios.post("https://nifytigoserver.onrender.com/login", iduser).data);
     // const response = await axios.post("https://nifytigo.onrender.com/login", user);
        console.log(response);
        return  dispatch({type: LOGIN, payload: response});
      } catch (error) {
        throw error;
      }
      
    };
};
