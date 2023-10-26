import { ADD_COUNTRY_NAME, REMOVE_COUNTRY, ADD_COUNTRY, ORDER_ABC, ORDER_POB, FILTER_CONTI } from "./actionType"

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

          case ORDER_ABC:
        let ordenABC = state.todosLosPaises.sort((a, b) => {
          return payload === "A" ? a.Nombre.localeCompare(b.Nombre) : b.Nombre.localeCompare(a.Nombre);
        });
            return{
                todosLosPaises: ordenABC,
                paisPorNombre: ordenABC,
            }

            case ORDER_POB:
        let ordenPOB = state.todosLosPaises.sort((a, b) => {
          return payload === "A" ? a.Población - b.Población : b.Población - a.Población;
        });
            return{
              ...state,
                todosLosPaises: ordenPOB,
                paisPorNombre: ordenPOB,
            }

            case FILTER_CONTI:
        let filterCont = payload === "Ordenar" ? state.todosLosPaises :
        state.todosLosPaises.filter(pais => pais.Continente === payload)
          
            return{
              ...state,
                todosLosPaises: filterCont,
                paisPorNombre: filterCont,
            }
    
        default:
            return {...state}
    }
}

export default reducer