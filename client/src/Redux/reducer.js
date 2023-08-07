import { GET_EJEMPLO, POST_NFT, GET_CATEGORIES } from "./actionTypes";

const initialState = {
    categories: [],
    ejemplo: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {


        case GET_EJEMPLO:
            return {
                ...state,
                ejemplo: action.payload
            };

        case POST_NFT:
            return {
                ...state,
                ejemplo: action.payload
            };

        case GET_CATEGORIES:
            return {
                ...state,
                ejemplo: action.payload,
                categories: action.payload,
            }
        case 'GET_GAMENAME':
            return {
                ...state,
                ejemplo: action.payload
            }

        default:
            return { ...state };
    }
};

export default rootReducer;

