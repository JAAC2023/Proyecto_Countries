import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import SearchBar from "./componentes/SerachBard/SearchBar";
import Cards from "./componentes/Cards/Cards";


function App() {

  const navigate = useNavigate()
  const [ paises, setPaises ] = useState([])
  const [ ingreso, setIngreso ] = useState(false)
  

  const entrada = () => {
    setIngreso(true);
    return ingreso && navigate("countries/name");
  }

  const onSearchNombre = async (pais) => {
    try {
      const URL = "http://localhost:5173/countries/name";
      
      console.log(pais.nombre)
      
      //const { data } = await axios.get(`${URL}?nombre=${pais.nombre}`);
      const { data } = await axios.get("http://localhost:5173/countries/name" + pais.nombre);

      if (data) setPaises([...paises, data]);
    } catch (error) {
      console.log(error.message);
       //window.alert ("No existe País");
    }
 }

//  const onSearch = async (pais) => {
//   try {
//     const URL = "http://localhost:5173/countries";
//      const { data } = await axios(`${URL}?nombre=${pais.nombre}`);
//      console.log(data);
//         if (data){
//            setPaises([...paises, data]);
//         } 
//   } catch (error) {
//      window.alert ("No existe País");
//   }
// }

  return (
  <div className="app">
    
    <Routes>
      <Route path="/" element={<LandingPage inicio={entrada}/>} />
      <Route path="/countries/name" element={<SearchBar onSearchNombre={onSearchNombre} />} />
      <Route path="/countries/name" element={<Cards paises={paises} />} />
    </Routes>
  </div>)
}

export default App;
