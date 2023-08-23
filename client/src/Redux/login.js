import axios from "axios";

export const LOGIN = 'LOGIN';

export const login = (iduser) => {
  return async function (dispatch) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios.post("https://nifytigoserver.onrender.com/login", iduser);
      // const response = await axios.post("https://nifytigo.onrender.com/login", user);

      return dispatch({ type: LOGIN, payload: response.data });
    } catch (error) {
      throw error;
    }

  };
};
