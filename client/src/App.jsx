import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import SearchBar from "./componentes/SerachBard/SearchBar.jsx";
import Cards from "./componentes/Cards/Cards.jsx";
import Detail from "./componentes/Detail/Detail";
import { addCountryName, removeCountry } from "./Redux/action"



function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const [ aux, setAux] = useState(false);
  const [ paises, setPaises ] = useState([])
  const [ ingreso, setIngreso ] = useState(false);
  const paisPorNombre = useSelector((state) => state.paisPorNombre);

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

  return (
  <div className="app">

  {location.pathname !== "/" && <SearchBar onSearchName={onSearchName} />}
    
    <Routes>
      <Route path="/" element={<LandingPage inicio={entrada}/>} />
      <Route path="/home" element={<Cards paisPorNombre={paisPorNombre} onClose={onClose} />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </div>)
}

export default App;
