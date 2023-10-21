import { ADD_COUNTRY_NAME } from "./actionType"

const initialState = {
  paisPorNombre: [],
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_COUNTRY_NAME:
            return { ...state, 
                paisPorNombre: payload, 
            };
    
        default:
            return {...state}
    }
}

export default reducer