import { 
  ADD_COUNTRY_NAME, 
  REMOVE_COUNTRY, 
  ADD_COUNTRY, 
  ORDER_ABC, 
  ORDER_POB, 
  FILTER_CONTI, 
  ADD_ACTIVITY,
  FILTER_ACTIV,} from "./actionType"

const initialState = {
  todosLosPaises: [],
  paisPorNombre: [],
  actividades:[],
  orderABC: "",
  filtroConti: "Todo",
  filtroActiv: "Todo",
  orderPob: "",
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
        todosLosPaises: [...payload ]
      };

    case ORDER_ABC:
      state.orderABC = payload;
      state.orderPob = "";
      return {
        ...state
      }
            
    case ORDER_POB:
      state.orderABC = "";
      state.orderPob = payload;
      return {
        ...state
      }

    case FILTER_CONTI:   
      state.filtroConti = payload;  
      return {
        ...state
      }

    case FILTER_ACTIV:   
      state.filtroActiv = payload;  
      return {
        ...state
      }

    case ADD_ACTIVITY:  
      return { ...state, 
        actividades: payload
      }
    
    default:
      return {...state}
  }
}

export default reducer