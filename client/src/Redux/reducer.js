import { 
  GET_EJEMPLO, 
  POST_NFT, GET_CATEGORIES, 
  SORT_ALFA, FILTER_CATEGORIES, 
  LOGIN_GOOGLE,
  LOGIN, LOGOUT, 
  GET_USER_ID, 
  GET_NFTS_FOR_USER, 
  UPDATE_USER_DETAIL, 
  UPDATE_USER } from "./actionTypes";

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
  allUsers: []
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
      let allcats = action.payload.push({ name: 'All' })
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
                console.log("Game en el reducer filter:", game,'el payload es:', action.payload );
              if (game.categories) {
                // console.log(game.categories)
                let cats=game.categories.map(cat=>cat.name)
                // console.log("categorias extraidas",cats)
                return cats.includes(action.payload);   //Devuelve los juegos en los que se encontro la cate
              }
              return false;
            });
            console.log('Cards ya filtradas:',filteredGamesByGenres);

            if(action.payload==='All'){
                filteredGamesByGenres=allGamesGenre;
              }
            // else {
            //     if (state.ejemplo.length > 0) {
            //       filteredGamesByGenres = filteredGamesByGenres.filter((game) =>
            //         state.ejemplo.includes(game)
            //   );
            //   }
            // }
      
            return {
              ...state,
              ejemplo: filteredGamesByGenres,
            };

 

    case LOGIN:
      localStorage.setItem("clientId", action.payload.user.id);
      localStorage.setItem("isClient", action.payload.user.client);
      localStorage.setItem("access", true)
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
      return {
        ...state,
        clientId: action.payload.id,
        isClient: action.payload.client,
        access: true,
      };
      
      
      case GET_USER_ID:
        case UPDATE_USER_DETAIL: // Puedes manejar ambas acciones aquí
          return {
            ...state,
            userDetail: action.payload,
          };
        case GET_NFTS_FOR_USER:
          console.log(action.payload);
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
    default:
      return state;



  }

};

export default rootReducer;

