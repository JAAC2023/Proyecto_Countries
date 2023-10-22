import axios from "axios";
import { ADD_COUNTRY_NAME, REMOVE_COUNTRY } from "./actionType";

const URL = 'http://localhost:3001/app/countries/name';

export const addCountryName = (pais) => {
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

export const removeCountry = (id) => {
  return (dispatch) => {
    return dispatch({type: REMOVE_COUNTRY, payload: id});
  };
};
