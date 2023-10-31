import "./App.css";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addActivity, addCountry, addCountryName, removeCountry, } from "./Redux/action";

import Detail from "./componentes/Detail/Detail";
import Cards from "./componentes/Cards/Cards.jsx";
import SearchBar from "./componentes/SerachBard/SearchBar.jsx";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import CardsForName from "./componentes/CardsByName/CardsByName.jsx";
import FormActivity from "./componentes/FormActivity/FormActivity";
import Avtivities from "./componentes/Activities/Activities";

function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  
  const searchCountry = (pais) => {
    dispatch(addCountryName(pais)); 
  }
  
  function onClose (id) {
    dispatch(removeCountry(id))
  }

  const searchCountries = () => {
    dispatch(addCountry());
  }

  const searchAvtivities = () => {
    dispatch(addActivity());
  }


  const postActivity = async({ Nombre, Dificultad, Duración, Temporada, Paises }) => {
    
    try { 
      const data = { Nombre, Dificultad: Number(Dificultad), Duración, Temporada, Paises };
      axios.post("http://localhost:3001/app/activities", data)
    } catch (error) {
      window.alert(error.message)
    }
  }

  return (
  <div className="app">
    {location.pathname !== "/" && <SearchBar 
    searchCountry={searchCountry} 
    searchCountries={searchCountries} 
    searchAvtivities={searchAvtivities} />} 
    
    <Routes>
      <Route path="/home" element={<Cards />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/activity/list" element={< Avtivities />} />
      <Route path="/home/name" element={<CardsForName onClose={onClose} />} />
      <Route path="/activity" element={<FormActivity postActivity={postActivity} />} />
    </Routes>
  </div>
  )
}

export default App;
