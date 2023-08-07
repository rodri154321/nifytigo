import { GET_EJEMPLO, POST_NFT, GET_CATEGORIES, SORT_ALFA } from "./actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
    categories: [],
    ejemplo: [],                //Todas las cards
    cardsFiltered: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EJEMPLO:
            return {
                ...state,
                ejemplo: action.payload,
                cardsFiltered: action.payload
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

        case SORT_ALFA:
            let cardsFilteredAlfa = [...state.ejemplo];

            switch (action.payload) {
                case 'A-Z':
                    cardsFilteredAlfa = cardsFilteredAlfa.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'Z-A':
                    cardsFilteredAlfa = cardsFilteredAlfa.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'Price (Higher First)':
                    cardsFilteredAlfa = cardsFilteredAlfa.sort((a, b) => b.price - a.price);
                    break;
                case 'Price (Lower First)':
                    cardsFilteredAlfa = cardsFilteredAlfa.sort((a, b) => a.price - b.price);
                    break;
                default:
                    break;
            }
            return {
                ...state,
                ejemplo: cardsFilteredAlfa,
            };
        case 'CREATE_USER_START':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case 'CREATE_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;

