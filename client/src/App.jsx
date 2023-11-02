import "./App.css";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Detail from "./componentes/Detail/Detail";
import Cards from "./componentes/Cards/Cards/Cards.jsx";
import NavBar from "./componentes/NavBar/Nav/Nav";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import CardsByName from "./componentes/Cards/CardsByName/CardsByName";
import FormActivity from "./componentes/FormActivity/FormActivity/FormActivity"
import Avtivities from "./componentes/Activities/Activities";

import { 
  addActivity,
  addCountry,
  addCountryName,
  removeCountry,
} from "./Redux/action";


function App() {

  const dispatch = useDispatch();
  const location = useLocation();


  const searchCountry = (pais) => {
    dispatch(addCountryName(pais));
  };

  function onClose(id) {
    dispatch(removeCountry(id));
  }

  const searchCountries = () => {
    dispatch(addCountry());
  };

  const searchAvtivities = () => {
    dispatch(addActivity());
  };

  const postActivity = async ({
    Nombre,
    Dificultad,
    Duración,
    Temporada,
    Paises,
  }) => {
    try {
      const info = {
        Nombre,
        Dificultad: Number(Dificultad),
        Duración,
        Temporada,
        Paises,
      };
      const {data} = await axios.post("http://localhost:3001/app/activities", info);
      
      window.alert(data)

    } catch (error) {
      window.alert(error.response.data.error);
    }
  };

  return (
    <div className="app">
      {location.pathname !== "/" && (
        <NavBar
          searchCountry={searchCountry}
          searchCountries={searchCountries}
          searchAvtivities={searchAvtivities}
        />
      )}

      <Routes>
        <Route path="/home" element={<Cards />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activity/list" element={<Avtivities />} />
        <Route path="/home/name" element={<CardsByName onClose={onClose} />} />
        <Route
          path="/activity"
          element={<FormActivity postActivity={postActivity} />}
        />
      </Routes>
    </div>
  );
}

export default App;
