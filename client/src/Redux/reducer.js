import { ADD_COUNTRY_NAME, REMOVE_COUNTRY, ADD_COUNTRY, ORDER_ABC, ORDER_POB, FILTER_CONTI } from "./actionType"

const initialState = {
  todosLosPaises: [],
  paisesOrdenados:[],
  paisPorNombre: [],
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_COUNTRY_NAME:
          return { ...state, 
            paisPorNombre: [...state.paisPorNombre, payload ],
          };

        case REMOVE_COUNTRY:
          return { ...state, 
            paisPorNombre: state.paisPorNombre.filter((pais) => pais.id !== payload),
          };

          case ADD_COUNTRY:
          return { ...state, 
            todosLosPaises: [...payload ],
            paisesOrdenados: [...payload ],
          };

          case ORDER_ABC:
            let ordenABC = state.paisesOrdenados.sort((a, b) => {
              if (payload === "A-Z") return a.Nombre.localeCompare(b.Nombre);
              if (payload === "Z-A") return b.Nombre.localeCompare(a.Nombre);
              
            });
              return{...state,
                todosLosPaises: ordenABC,
                paisPorNombre: ordenABC,
              };
            
        //     case ORDER_POB:
        // let ordenPOB = state.paises.sort((a, b) => {
        //   if (payload === "A") return a.Población - b.Población;
        //   if (payload === "D") return b.Población - a.Población;
        // });
        //     return{
        //       ...state,
        //         todosLosPaises: ordenPOB,
        //         paisPorNombre: ordenPOB,
        //     }

        //     case FILTER_CONTI:
        // let filterCont = payload === "Ordenar" ? state.paises :
        // state.todosLosPaises.filter(pais => pais.Continente === payload)
          
        //     return{
        //       ...state,
        //         todosLosPaises: filterCont,
        //         //paisPorNombre: filterCont,
        //     }
    
        default:
            return {...state}
    }
}

export default reducer