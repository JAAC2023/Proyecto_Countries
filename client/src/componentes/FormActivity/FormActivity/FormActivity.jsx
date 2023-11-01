import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import validation from "../../../utils/valditations";
import handlers from "../handlers/handlers";
import estados from "../../../index/estadosGlobales";

const FormActivity = ({ postActivity }) => {

  const { 
    errores, 
    activity, 
    tempo, 
    difil,
    multPaises,
    handleChange, 
    handleChangeDificultad, 
    handleChangeTemporada, 
    handleSelectChangePais, 
    limpiarPaises} = handlers()
    
  const temporada = ["", "Verano", "Otoño", "Invierno", "Primavera"]
  const dificultad = ["",1, ,2 ,3 ,4 ,5]
  const { todosLosPaises } = estados()
  const mapeo = todosLosPaises?.map(({id, Nombre}) => ({id, Nombre}))
  const paises = mapeo.sort((a, b) => a.Nombre.localeCompare(b.Nombre));


  const handleSubmit = (event) => {
    event.preventDefault()
    postActivity(activity)
  }

  const registroExitoso = () => {
    window.alert("Registro exitoso")
  }
  
  return (
    <form onSubmit={handleSubmit}>

      <NavLink to={'/home'}>
        <button className="home">HOME</button>
      </NavLink>
      
      <div>
        <label className="">Nombre: </label>
        <input
          className=""
          type="text"
          onChange={handleChange}
          value={activity.Nombre}
          name="Nombre"
        />
        <label >... {activity.Nombre}</label>
        {errores.Nombre ? <p>{errores.Nombre}</p>:<p>...</p>}

        <p> </p>

        <label className="">Dificultad: </label>
        <select className="" onChange={handleChangeDificultad}>
        {dificultad.map((opcion) => (
          <option 
            className="" 
            key={opcion} 
            value={opcion}>
            {opcion}
          </option>
        ))}
        </select>
        <label>... {difil}</label>
        {errores.Dificultad ? <p>{errores.Dificultad}</p>:<p>...</p>}

        <p> </p>

        <label className="">Duración: </label>
        <input
          className=""
          type="number"
          onChange={handleChange}
          value={activity.Duración}
          name="Duración"
        />
        <label >... {activity.Duración} Horas</label>
        {errores.Duración ? <p>{errores.Duración}</p>:<p>...</p>}

        <p></p>
     
        <label className="">Temporada: </label>
        <select className="" onChange={handleChangeTemporada}>
        {temporada.map((opcion) => (
          <option 
            className="" 
            key={opcion} 
            value={opcion}>
            {opcion}
          </option>
        ))}
        </select>
        <label>... {tempo}</label>
        {errores.Temporada ? <p>{errores.Temporada}</p>:<p>...</p>}

        <p> </p>

        <label className="">Pais: </label>
        <select multiple={true} className="" onChange={handleSelectChangePais} >
        {paises?.map(({Nombre, id}) => (
          <option 
            className="" 
            key={Nombre} 
            value={[id]}>
            {Nombre} ({id})
          </option>
        ))}
        </select>
        {errores.Paises ? <p>{errores.Paises}</p>:<p>...</p>}
        <p>Seleccionados: {multPaises.join(", ")}</p>

        <button onClick={()=>limpiarPaises()}>Limpiar</button>
      </div>

      <div>
        {errores.Paises === "Bien ✔" && 
        errores.Temporada === "Bien ✔" && 
        errores.Duración === "Bien ✔" &&
        errores.Dificultad === "Bien ✔" && 
        errores.Nombre === "Bien ✔" ? 
        <button type="submit" onClick={() => registroExitoso()}>ENVIAR</button> : 
        <button type="submit" disabled={true} >ENVIAR</button>}
        
      </div>
    </form>
    
  )
}

export default FormActivity;