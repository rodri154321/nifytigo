import { 
  GET_EJEMPLO, 
  POST_NFT, GET_CATEGORIES, 
  SORT_ALFA, FILTER_CATEGORIES, 
  LOGIN_GOOGLE,
  LOGIN, LOGOUT, 
  GET_USER_ID, 
  GET_NFTS_FOR_USER, 
  UPDATE_USER_DETAIL, 
  UPDATE_USER,
  CART_ID,
  DELETE_CART_LOGO
} from "./actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
  categories: [],
  ejemplo: [],                //Todas las cards
  cardsFiltered: [],
  isLoggeIn: false,
  clientId: 0,
  isClient: true,
  access: false,
  userDetail: [],
  allUsers: [],
  carritoId: [],
  adminAccessGranted: false,
  
  cardLogoID:null
}


//traer los carritos dependiendo del id
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EJEMPLO:
      return {
        ...state,
        ejemplo: action.payload,
        cardsFiltered: action.payload,
      };
      
    case POST_NFT:
      return {
        ...state,
        ejemplo: action.payload
      };

    case GET_CATEGORIES:
      let allcats = action.payload.unshift({ name: 'All' })
      return {
        ...state,
        // ejemplo: action.payload,
        categories: action.payload,
      }
    case 'GET_GAMENAME':
      return {
        ...state,
        ejemplo: action.payload
      }
    case  DELETE_CART_LOGO:
      console.log('en el DELETE_CART_LOGO(reducer):',action.payload)
      return{
          ...state,
          cardLogoID:action.payload
      };
        case SORT_ALFA:
            // eslint-disable-next-line no-case-declarations
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
              
        case FILTER_CATEGORIES:
            // eslint-disable-next-line no-case-declarations
            const allGamesGenre = [...state.cardsFiltered];
            console.log("Todos los games ENTRANTES el reducer filter:", allGamesGenre);
            // eslint-disable-next-line no-case-declarations
            let filteredGamesByGenres = allGamesGenre.filter((game) => {
                // console.log("Game en el reducer filter:", game,'el payload es:', action.payload );
              //if (game.categories) {
                // console.log(game.categories)
                let cats=game.categories.map(cat=>cat)
                console.log("categorias extraidas",cats)
                return cats.includes(action.payload);   //Devuelve los juegos en los que se encontro la cate
              //}
              return false;
            });
            console.log('Cards ya filtradas:',filteredGamesByGenres);

            if(action.payload==='All'){
                filteredGamesByGenres=allGamesGenre;
              }
            return {
              ...state,
              ejemplo: filteredGamesByGenres,
            };

    case CART_ID:
        localStorage.setItem("cartId", action.payload.cartId.id);
      return{
        ...state,
        carritoId: action.payload.cartId.id
      }


    case LOGIN:
      localStorage.setItem("clientId", action.payload.id);
      localStorage.setItem("isClient", action.payload.client);
      localStorage.setItem("access", true)
      console.log('userId en reducer',action.payload.id);
      return {
        ...state,
        clientId: action.payload.id,
        isClient: action.payload.client,
        access: true,
      };

    case LOGOUT:
     localStorage.clear();
      // localStorage.setItem("isClient", 0)
      // localStorage.setItem("access", false)
      return {
        ...state,
        clientId: 0,
        isClient: true,
        access: false,
      };

    case LOGIN_GOOGLE:
      localStorage.setItem("clientId", action.payload.id);
      localStorage.setItem("isClient", action.payload.client);
      localStorage.setItem("loger", true);
      localStorage.setItem("access", true)
      // console.log('userId en reducer',action.payload.user.id);
      return {
        ...state,
        clientId: action.payload.id,
        isClient: action.payload.client,
        access: true,
      };
      
      
      case GET_USER_ID:
        case UPDATE_USER_DETAIL: // Puedes manejar ambas acciones aquí
        localStorage.setItem("userDetail", action.payload);
          return {
            ...state,
            userDetail: action.payload,
          };
          
        case GET_NFTS_FOR_USER:
          return {
            ...state,
            userNFTs: action.payload,
          };
        case UPDATE_USER:
          return { ...state };
      
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
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        error: null,
      };
      case 'GRANT_ADMIN_ACCESS_SUCCESS':
        return {
            ...state,
            adminAccessGranted: true,
            error: null,
        };
    case 'GRANT_ADMIN_ACCESS_FAILURE':
        return {
            ...state,
            adminAccessGranted: false,
            error: action.error,
        };
    default:
      return state;



  }

};

export default rootReducer;

