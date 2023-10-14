import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import SearchBar from "./componentes/SerachBard/SearchBar";


function App() {

  const navigate = useNavigate()
  const [ countries, setCountries ] = useState([])
  const [ ingreso, setIngreso ] = useState(false)
  

  const entrada = () => {
    setIngreso(true);
    return ingreso && navigate("countries/name");
  }

  const onSearch = async (pais) => {
    try {
      const URL = "http://localhost:5173/countries/name";
       const { data } = await axios(`${URL}?nombre=${pais.nombre}`);
       console.log(data);
          if (data){
             setCountries([...countries, data]);
          } 
    } catch (error) {
       window.alert ("No existe País")
    }
 }

  return (
  <div className="app">
    
    <Routes>
      <Route path="/" element={<LandingPage inicio={entrada}/>} />
      <Route path="/countries/name" element={<SearchBar onSearch={onSearch} />} />
    </Routes>
  </div>)
}

export default App;
