import { useState } from "react";
import "./LandingPage.css";
import simbol from "../../../Material_Multimedia/Play.jpg"

export default function LandingPage() {

  const simbolPlay = <img src={simbol} alt="" className="simbolo"/>

  return (
  <div className="landing_pague">
    <h1 className="Titulo">App countrieS</h1>
    <button className="boton">{simbolPlay}</button>
  </div>
  )
}