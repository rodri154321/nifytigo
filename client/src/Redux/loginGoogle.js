import axios from "axios";

export const LOGIN_GOOGLE = 'LOGIN_GOOGLE';

export const loginGoogle = (user) => {
    return async function (dispatch) {
      // eslint-disable-next-line no-useless-catch
      try {
        //const response = await axios.post("http://localhost:3001/login/google", user);
        
       const response = await axios.post("https://nifytigoserver.onrender.com/login/google", user)
        console.log(response);
        return dispatch({type: LOGIN_GOOGLE, payload: response.data});
      } catch (error) {
        throw error;
      }
      
    };
};