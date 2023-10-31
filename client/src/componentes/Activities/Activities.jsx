import { useSelector } from "react-redux";

export default function Avtivities() {

  const actividades = useSelector((state) => state.actividades);

  let contador = 1;

  return (
     <div className="">
        {actividades?.map((activ) => (
        <h1 key={activ.id}>
           Actividad {contador ++}: <p></p>
           Nombre: {activ.Nombre} | 
           Dificultad: {activ.Dificultad} | 
           Duración: {activ.Duración} |  
           Temporada: {activ.Temporada} |
           Paises: {activ.Countries?.map((pais) => <label key={pais.id} >{pais.Nombre}, </label>)}<hr></hr>
        </h1>
        ))}
     </div>
  )
}