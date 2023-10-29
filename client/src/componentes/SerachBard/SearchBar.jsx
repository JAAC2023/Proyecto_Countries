import './SearchBar.css'
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterConti, orderABC, orderPOB, } from '../../Redux/action';

export default function SearchBar({ onSearch, onSearchName, searchAvtivities}) {
  
  const location = useLocation();
  const continentes = ["Ordenar", "Africa", "Europe", "Oceania", "Asia", "North America", "South America"];
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [pais, setPais] = useState({nombre: "" });

  useEffect(() => onSearch(),[]);

  const handleChange = (event) =>{
    setPais({nombre: event.target.value});
  };

  const handleOrderABC = (event) => {
    dispatch(orderABC(event.target.value));
    setAux(!aux)
  };

  const handleOrderPob = (event) => {
    dispatch(orderPOB(event.target.value));
    setAux(!aux)
  };

  const handlerFilterConti = (event) => {
    dispatch(filterConti(event.target.value));
    
  };

  const display = "SearchBar"
  const displayNone = "none"
  
   return (
    <div className={location.pathname === "/activity" ? displayNone : display}>
    <NavLink to={'/home'}>
      <button className="home">HOME</button>
    </NavLink> 

    <NavLink to={'/activity'}>
        <button className="" >Crear Actividad</button>
    </NavLink>

    <NavLink to={'/activity/list'}>
      <button className="" onClick={() => searchAvtivities()}>Lista de Actividades</button>
    </NavLink>

    <input 
      type="text" 
      onChange={handleChange}
      className=""
      value={pais.nombre} />
      <NavLink to={'/home/name'}>
        <button className="" onClick={() => onSearchName(pais)}>Buscar</button>
      </NavLink>

      <NavLink to={'/home/name'}>
      <button className="home">Lista de Busqueda</button>
      </NavLink>
      <p></p>

      <select className="" onChange={handleOrderABC}>
        <option className="" value="">Ordenar</option>
        <option className="" value="A-Z">A ⬆ Z</option>
        <option className="" value="Z-A">Z ⬇ A</option>
      </select>
    
      <select className="" onChange={handlerFilterConti}>
        {continentes.map((option) => (
          <option className="" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select className="" onChange={handleOrderPob}>
        <option className="" value="">Ordenar</option>
        <option className="" value="A">Ascendente</option>
        <option className="" value="D">Descendente</option>
      </select>

      
    </div>
    )
}