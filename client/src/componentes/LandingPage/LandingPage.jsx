import "./LandingPage.css";
import simbol from "../../../Material/Play.jpg"

export default function LandingPage({ inicio }) {

  const simbolPlay = <img src={simbol} alt="Not Found" className="simbolo"/>

  return (
  <div className="landing_pague">
    <h1 className="Titulo">App countrieS</h1>
    <button className="boton" onClick={() => inicio()}>{simbolPlay}</button>
  </div>
  )
}