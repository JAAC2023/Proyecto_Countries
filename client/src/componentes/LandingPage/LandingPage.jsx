import "./LandingPage.css";
import simbol from "../../../Material/Play.jpg"
import { NavLink } from "react-router-dom";

export default function LandingPage() {

  const simbolPlay = <img src={simbol} alt="Not Found" className="simbolo"/>

  return (
  <div className="landing_pague">
    <h1 className="Titulo">App countrieS</h1>
    <NavLink to={"/home"}>
      <button className="boton">{simbolPlay}</button>
    </NavLink>
    
  </div>
  )
}