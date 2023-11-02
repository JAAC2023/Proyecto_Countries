import "./Detail.css"
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail() {

    const { id } = useParams();
    const [pais, setPais] = useState([]);   

    
    useEffect(() => {
      if (pais.length === 0) {
        axios.get(`http://localhost:3001/app/countries/${id}`)
        .then(({data}) => {
          if (data) setPais(data);
        }) 
        return setPais({});
      }
    },[id])
    
    const actvidades =  pais.Activities
    
    return (
      <div className="detail">
        <h1 className="titulo">DETALLE</h1>
        <div className="texto">
          <h2 >Id........{pais.id}</h2>
          <hr />
          <h2>Nombre....{pais.Nombre}</h2>
          <hr />
          <h2>Continente....{pais.Continente}</h2>
          <hr />
          <h2>Capital....{pais.Capital}</h2>
          <hr />
          <h2>Subregión...{pais.Subregión}</h2>
          <hr />
          <h2>Area...{pais.Area} m2</h2>
          <hr />
          <h2>Población...{pais.Población}</h2>
          <hr />
          <h2>Actividades:</h2>
          {actvidades?.map(({id, Nombre, Dificultad, Duración, Temporada})=>{
            return (<h2 key={id}>
              ✅Nombre: {Nombre} | 
              Dificultad: {Dificultad} |
              Duración:{Duración}h |
              Temporada:{Temporada} |
              </h2>)
          })}
        </div>
        <img className="imagen" src= {pais.Bandera} alt= "Not Found" />    
      </div>
    )   
}