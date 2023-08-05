import axios from "axios"
 import { POST_NFT } from "./actionTypes"

 export const postNft = ()=> {
    return async function (dispatch){
        const response = await axios.post(`http://localhost:3001/nft/create`)
        return dispatch({
            type: POST_NFT,
            payload: response.data
        })
    }
 }
 