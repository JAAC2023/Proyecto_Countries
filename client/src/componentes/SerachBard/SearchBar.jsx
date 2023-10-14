import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar({ onSearch }) {

   const [pais, setPais] = useState({nombre: "" });

   const [aux, setAux] = useState([]);

   const handleChange = (event) =>{
    const { value } = event.target;
      setPais({...pais, value});
   }

  //  const repetido = () => {
  //     if (pais.nombre){
  //        setAux([...aux, pais.nombre])
  //        if (!aux.includes(pais.nombre)) {
  //           onSearch(pais)
  //        } else {
  //           window.alert("País ya existe")
  //        }
  //     } else {
  //        window.alert("Por favor ingrese un Nombre")
  //     }
  //     setPais('')
  //  }

   return (
      <div>
         <input 
         type="text" 
         onChange={handleChange}
         className=""
         /*value={pais.nombre}*//>
         <button className="" onClick={() => onSearch(pais)}>Buscar</button>
      </div>
   );
}