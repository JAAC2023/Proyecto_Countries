import axios from "axios";
import { 
  ADD_COUNTRY_NAME,
  REMOVE_COUNTRY, 
  ADD_COUNTRY, 
  ORDER_ABC, 
  ORDER_POB, 
  FILTER_CONTI, 
  ADD_ACTIVITY, } from "./actionType";

export const addCountry = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001/app/countries');
      if (data) {
      return dispatch ({type: ADD_COUNTRY, payload: data});
      }
    } catch (error) {
      window.alert (error.message);
    }
  };
};

export const addCountryName = (pais) => {
  const URL = 'http://localhost:3001/app/countries/name';
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

export const orderABC = (order) => {
  return {type: ORDER_ABC, payload: order}
}

export const orderPOB = (order) => {
  return {type: ORDER_POB, payload: order}
}

export const filterConti = (filter) => {
  return {type: FILTER_CONTI, payload: filter}
}

export const addActivity = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001/app/activities');
      if (data) {
      return dispatch ({type: ADD_ACTIVITY, payload: data});
      }
    } catch (error) {
      window.alert (error.message);
    }
  };
};