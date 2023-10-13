import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";


function App() {

  return (
  <div className="app">
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </div>)
}

export default App;
