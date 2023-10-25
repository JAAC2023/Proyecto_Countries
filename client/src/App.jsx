import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCountry, addCountryName, removeCountry } from "./Redux/action";

import Detail from "./componentes/Detail/Detail";
import Cards from "./componentes/Cards/Cards.jsx";
import SearchBar from "./componentes/SerachBard/SearchBar.jsx";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import CardsForName from "./componentes/CardsForName/CardsForName.jsx";



function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [ ingreso, setIngreso ] = useState(false);
  const paisPorNombre = useSelector((state) => state.paisPorNombre);
  const todosLosPaises = useSelector((state) => state.todosLosPaises);
 
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

  return (
  <div className="app">
    {location.pathname !== "/" && <SearchBar onSearch={onSearch} onSearchName={onSearchName} />}
    <Routes>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/" element={<LandingPage inicio={entrada}/>} />
      <Route path="/home" element={<Cards todosLosPaises={todosLosPaises} />} />
      <Route path="/home/name" element={<CardsForName paisPorNombre={paisPorNombre} onClose={onClose} />} />
    </Routes>
  </div>
  )
}

export default App;
