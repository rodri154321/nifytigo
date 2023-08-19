import axios from 'axios'

import {UPDATE_USER} from "./actionTypes";

export const updateUser = (user) => {
    return async (dispatch) => {
           
        const id = localStorage.getItem('clientId');
        //const info = await axios.put(`https://nifytigo-49k6.onrender.com/users/${id}`, user);
      const info = await axios.put(`https://nifytigoserver.onrender.com/users/${id}`, user);
        return dispatch({ type: UPDATE_USER, payload: info.data });

    }
}