import { DELETE_CART_LOGO } from "./actionTypes";

export const setDeleteCartLogo = (cardId) => {
    return async function(dispatch){
        // console.log('Seteando el cardLogo de:',cardId)
        return dispatch({
            type:DELETE_CART_LOGO,
            payload:cardId
        })
    }
}