import { GET_EJEMPLO } from "./actionTypes";
import { POST_NFT } from "./actionTypes";

const initialState = {
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
        default:
            return { ...state };
    }
};

export default rootReducer;

