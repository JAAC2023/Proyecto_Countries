import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addActivity, addCountry, addCountryName, removeCountry } from "./Redux/action";

import Detail from "./componentes/Detail/Detail";
import Cards from "./componentes/Cards/Cards.jsx";
import SearchBar from "./componentes/SerachBard/SearchBar.jsx";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import CardsForName from "./componentes/CardsForName/CardsForName.jsx";
import FormActivity from "./componentes/FormActivity/FormActivity";
import Avtivities from "./componentes/Activities/Activities";



function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [ ingreso, setIngreso ] = useState(false);
  
  const entrada = () => {
    setIngreso(true);
    return ingreso && navigate("home");
  }
  
  const searchCountry = (pais) => {
    dispatch(addCountryName(pais)); 
  }
  
  function onClose (id) {
    dispatch(removeCountry(id))
  }

  const searchCountries = () => {
    dispatch(addCountry());
  }

  const postActivity = async({ Nombre, Dificultad, Duración, Temporada, Paises }) => {
    
    try { 
      const data = { Nombre, Dificultad: Number(Dificultad), Duración, Temporada, Paises };
      console.log(data.Dificultad, typeof data.Dificultad);
      axios.post("http://localhost:3001/app/activities", data)
    } catch (error) {
      window.alert(error.message)
    }
  }

  const searchAvtivities = () => {
    dispatch(addActivity());
  }

  return (
  <div className="app">
    {location.pathname !== "/" && <SearchBar 
    searchCountries={searchCountries} 
    searchCountry={searchCountry} 
    searchAvtivities={searchAvtivities} />}
    
    <Routes>
      <Route path="/home" element={<Cards />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/activity/list" element={< Avtivities />} />
      <Route path="/" element={<LandingPage inicio={entrada}/>} />
      <Route path="/home/name" element={<CardsForName onClose={onClose} />} />
      <Route path="/activity" element={<FormActivity postActivity={postActivity} />} />
    </Routes>
  </div>
  )
}

export default App;
