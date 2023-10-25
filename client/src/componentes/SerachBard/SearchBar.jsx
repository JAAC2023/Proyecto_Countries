import './SearchBar.css'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SearchBar({ onSearch, onSearchName }) {

  useEffect(() => onSearch(),[])

   const [pais, setPais] = useState({nombre: "" });

   const handleChange = (event) =>{
    setPais({nombre: event.target.value});
   }
  
   return (
    <div>
    <NavLink to={'/home'}>
      <h1 className="">🏠</h1>
    </NavLink> 
         
    <input 
      type="text" 
      onChange={handleChange}
      className=""
      value={pais.nombre} />
      <NavLink to={'/home/name'}>
        <button className="" onClick={() => onSearchName(pais)}>Buscar</button>
      </NavLink>     
    </div>
  );
}