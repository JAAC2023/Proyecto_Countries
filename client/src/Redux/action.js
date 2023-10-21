import axios from "axios";
import { ADD_COUNTRY_NAME } from "./actionType";

const URL = 'http://localhost:3001/app/countries/name';

const addCountryName = (pais) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(URL + `?nombre=${pais.nombre}`);
        if (data) {
          return dispatch ({type: ADD_COUNTRY_NAME, payload: data});
        }
      } catch (error) {
         window.alert ("No existe este país");
      }
    };
};

export default {
  addCountryName
};
