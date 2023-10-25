import { ADD_COUNTRY_NAME, REMOVE_COUNTRY, ADD_COUNTRY } from "./actionType"

const initialState = {
  todosLosPaises: [],
  paisPorNombre: [],
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_COUNTRY_NAME:
          return { ...state, 
              paisPorNombre: [...state.paisPorNombre, payload ] 
          };

        case REMOVE_COUNTRY:
          return { ...state, 
            paisPorNombre: state.paisPorNombre.filter((pais) => pais.id !== payload) 
          };

          case ADD_COUNTRY:
          return { ...state, 
              todosLosPaises: [...payload ] 
          };
    
        default:
            return {...state}
    }
}

export default reducer