import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import SearchBar from "./componentes/SerachBard/SearchBar.jsx";
import Cards from "./componentes/Cards/Cards.jsx";
import Detail from "./componentes/Detail/Detail";
import { useSelector } from "react-redux";
import { addCountryName } from "./Redux/action"



function App() {

  const navigate = useNavigate()
  const location = useLocation();
  const [ paises, setPaises ] = useState([])
  const [ ingreso, setIngreso ] = useState(false)
  const paisPorNombre = useSelector((state) => state.paisPorNombre);

  const entrada = () => {
    setIngreso(true);
    return ingreso && navigate("home");
  }

  const onSearchName = async (pais) => {
    try {
      await addCountryName(pais)
    } catch (error) {
       window.alert ("No existe este país");
    }
 }

 function onClose(id) {
  const filtro = paises.filter((pais) => pais.id !== id);
  setPaises(filtro);
}

function back() {
  return navigate("home");
}

  return (
  <div className="app">

  {location.pathname !== "/" && <SearchBar onSearchName={onSearchName} />}
    
    <Routes>
      <Route path="/" element={<LandingPage inicio={entrada}/>} />
      <Route path="/home" element={<Cards paisPorNombre={paisPorNombre} onClose={onClose} />} />
      <Route path="/detail/:id" element={<Detail back={back} />} />
    </Routes>
  </div>)
}

export default App;
