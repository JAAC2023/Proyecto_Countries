import { useState } from "react";
import { useSelector } from "react-redux";

const URL = "http://localhost:3001/activities";

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
  const mapeo = todosLosPaises?.map((pais) => pais.Nombre )
  const paises = mapeo.sort();
  console.log(paises);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleChangeTemporada = (event) => {
    const { value } = event.target;
    setTempo(value)
    setActivity({ ...activity, Temporada: value });
  }
  const handleChangeDificultad = (event) => {
    const { value } = event.target;
    setDifil(value)
    setActivity({ ...activity, Dificultad: value });
  }

  const handleSelectChangePais = (event) => {
    const { name, value } = event.target;
    setMultPaises([...multPaises, value])
    setActivity({ ...activity, [name]: activity.Paises.push(value) });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postActivity(activity)
  }
  
  return (
    <form onSubmit={handleSubmit}>
     <div>
      <label className="">Nombre</label>
        <input
          className=""
          type="text"
          onChange={handleChange}
          value={activity.Nombre}
          name="Nombre"
        />

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
      <p>Dificultad: {difil}</p>

        <label className="">Duración</label>
        <input
          className=""
          type="number"
          onChange={handleChange}
          value={activity.Duración}
          name="Duración"
        />
     
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
        <p>Temporada: {tempo}</p>

      <label className="">Pais</label>
        <select multiple={true} className="" onChange={handleSelectChangePais} value={multPaises}>
        {paises?.map((opcion) => (
          <option 
            className="" 
            key={opcion} 
            value={[opcion]}
            name={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      <p>seleccionado: {multPaises.join(", ")}</p>
      </div>

      <div>
        <button type="sbmit" >ENVIAR</button>
      </div>
    </form>
    
  )
}

export default FormActivity;