import axios from "axios";

export function buscarName(name) {
    return async function (dispatch) {
        try {
           const responce = (await axios.get(`https://nifytigoserver.onrender.com/nft/?name=${name}`)).data;
            //const responce = (await axios.get(`https://nifytigo.onrender.com/nft/?name=${name}`)).data;
            console.log(responce);
            dispatch({
                type:'GET_GAMENAME',
                payload: responce
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
