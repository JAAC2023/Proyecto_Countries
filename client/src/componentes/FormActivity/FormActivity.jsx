import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const FormActivity = ({ postActivity }) => {

  const temporada = ["...", "Verano", "Otoño", "Invierno", "Primavera"]
  const dificultad = ["...",1, ,2 ,3 ,4 ,5]

  const [activity, setActivity] = useState({
    Nombre: "",
    Dificultad: "",
		Duración: "",
		Temporada: "",
		Paises: []
  });

  const [multPaises, setMultPaises] = useState([]);
  const [tempo, setTempo] = useState("");
  const [difil, setDifil] = useState("");
  
  const todosLosPaises = useSelector((state) => state.todosLosPaises);
  const mapeo = todosLosPaises?.map(({id, Nombre}) => ({id, Nombre}))
  const paises = mapeo.sort((a, b) => a.Nombre.localeCompare(b.Nombre));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleChangeTemporada = (event) => {
    setTempo(event.target.value)
    setActivity({ ...activity, Temporada: event.target.value });
  }
  const handleChangeDificultad = (event) => {
    setDifil(event.target.value)
    setActivity({ ...activity, Dificultad: event.target.value });
  }

  const handleSelectChangePais = (event) => {
    setMultPaises([...multPaises, event.target.value]);
    const push = activity.Paises.push(event.target.value);
    setActivity({ ...activity, push });
  }
  const limpiarPaises = () => {
    setMultPaises([])
    setActivity([])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postActivity(activity)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <NavLink to={'/home'}>
        <button className="home">HOME</button>
      </NavLink>
      <div>
        <label className="">Nombre</label>
        <input
          className=""
          type="text"
          onChange={handleChange}
          value={activity.Nombre}
          name="Nombre"
        />

        <p> </p>

        <label className="">Dificultad</label>
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
        <label>{difil}</label>

        <p> </p>

        <label className="">Duración</label>
        <input
          className=""
          type="number"
          onChange={handleChange}
          value={activity.Duración}
          name="Duración"
        />
        <label >Horas</label>

        <p></p>
     
        <label className="">Temporada</label>
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
        <label>{tempo}</label>

        <p> </p>

        <label className="">Pais</label>
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
        <p>Seleccionados: {multPaises.join(", ")}</p>
        <button onClick={()=>limpiarPaises()}>Limpiar</button>
      </div>

      <div>
        <button type="sbmit" >ENVIAR</button>
      </div>
    </form>
    
  )
}

export default FormActivity;