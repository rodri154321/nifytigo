import axios from "axios";

export function buscarName(name) {
    return async function (dispatch) {
        try {
<<<<<<< HEAD
            const responce = (await axios.get(`http://localhost:3001/nft/?name=${name}`)).data;
            //const responce = (await axios.get(`https://nifytigo.onrender.com/nft/?name=${name}`)).data;
=======
           // const responce = (await axios.get(`http://localhost:3001/nft/?name=${name}`)).data;
            const responce = (await axios.get(`https://nifytigoserver.onrender.com/nft/?name=${name}`)).data;
>>>>>>> 62e7e8e5a4868706b48a702db2c84be7faea577b
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
