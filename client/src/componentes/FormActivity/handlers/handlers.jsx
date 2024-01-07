import { useState } from "react";
import validation from "../../../utils/valditations";

export default function handlers() {
  const [activity, setActivity] = useState({
    Nombre: "",
    Dificultad: 0,
		Duración: "",
		Temporada: "",
		Paises: []
  });

  const [errores, setErrores] = useState({});
  const [multPaises, setMultPaises] = useState([]);
  const [tempo, setTempo] = useState("");
  const [difil, setDifil] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
    setErrores(validation({ ...activity, [name]: value }));
  };
  
  const handleChangeTemporada = (event) => {
    setTempo(event.target.value)
    setActivity({ ...activity, Temporada: event.target.value });
    setErrores(validation({ ...activity, Temporada: event.target.value }));
  }
  
  const handleChangeDificultad = (event) => {
    setDifil(event.target.value)
    setActivity({ ...activity, Dificultad: event.target.value });
    setErrores(validation({ ...activity, Dificultad: event.target.value }));
  }
  
  const cerrar = (id) =>{
    setMultPaises([...multPaises, multPaises.filter((item)=> item.id !== id)])
  }


  const handleSelectChangePais = (event) => {
    setMultPaises([...multPaises, event.target.value, <button onClick={() => cerrar(id)}>❌</button>]);
    const push = activity.Paises.push(event.target.value);
    setActivity({ ...activity, push });
    setErrores(validation({ ...activity, push }));
  }


  return {
    errores, 
    activity, 
    tempo, 
    difil,
    multPaises,
    handleChange, 
    handleChangeDificultad, 
    handleChangeTemporada, 
    handleSelectChangePais,
    cerrar
  }
}