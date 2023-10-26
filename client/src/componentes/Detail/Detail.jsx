import "./Detail.css"
import axios from "axios"
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail() {

    const { id } = useParams();
    const [pais, setPais] = useState()

    useEffect(() => {
      axios.get(`http://localhost:3001/app/countries/${id}`)
      .then(({data}) => {
        if (data) setPais(data);
        else return(<div>...Cargando</div>)
      }) 
        return setPais({})
    },[id])
    
    return (
      <div className="detail">
        <h1 className="">DETAIL</h1>
        <div className="">
          <NavLink to="/home">
            <button>Atrás</button>
          </NavLink>
          <h2 >Id........{pais?.id}</h2>
          <hr />
          <h2>Nombre....{pais?.Nombre}</h2>
          <hr />
          <h2>Continente....{pais?.Continente}</h2>
          <hr />
          <h2>Capital....{pais?.Capital}</h2>
          <hr />
          <h2>Subregión...{pais?.Subregión}</h2>
          <hr />
          <h2>Area...{pais?.Area}</h2>
          <hr />
          <h2>Población...{pais?.Población}</h2>
        </div>
        <img className="" src= {pais?.Bandera} alt= "Not Found" />    
      </div>
    )   
}