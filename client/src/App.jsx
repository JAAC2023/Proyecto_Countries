import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const paisPorNombre = useSelector((state) => state.paisPorNombre);
  const todosLosPaises = useSelector((state) => state.todosLosPaises);
  const actividades = useSelector((state) => state.actividades);
 
  const entrada = () => {
    setIngreso(true);
    return ingreso && navigate("home");
  }
  
  const onSearchName = (pais) => {
    dispatch(addCountryName(pais)); 
  }
  
  function onClose (id) {
    dispatch(removeCountry(id))
  }

  const onSearch = () => {
    dispatch(addCountry());
  }

  const postActivity = async({ Nombre, Dificultad, Duración, Temporada, Paises }) => {
    try { 
      const data = { Nombre, Dificultad, Duración, Temporada, Paises };
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
    {location.pathname !== "/" && <SearchBar onSearch={onSearch} onSearchName={onSearchName} searchAvtivities={searchAvtivities} />}
    
    <Routes>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/activity" element={<FormActivity postActivity={postActivity} />} />
      <Route path="/activity/list" element={< Avtivities actividades={actividades} />} />
      <Route path="/" element={<LandingPage inicio={entrada}/>} />
      <Route path="/home" element={<Cards todosLosPaises={todosLosPaises} />} />
      <Route path="/home/name" element={<CardsForName paisPorNombre={paisPorNombre} onClose={onClose} />} />
    </Routes>
  </div>
  )
}

export default App;
