import './SearchBar.css'
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterConti, orderABC, orderPOB, } from '../../Redux/action';

export default function SearchBar({ onSearch, onSearchName }) {
  
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
  };

  const handlerFilterConti = (event) => {
    dispatch(filterConti(event.target.value));
    setAux(!aux)
  };
  
   return (
    <div className='searchBar'>
    <NavLink to={'/home'}>
      <h1 className="home">HOME</h1>
    </NavLink> 
         
    <input 
      type="text" 
      onChange={handleChange}
      className=""
      value={pais.nombre} />
      <NavLink to={'/home/name'}>
        <button className="" onClick={() => onSearchName(pais)}>Buscar</button>
      </NavLink>
      <select className="" onChange={handleOrderABC}>
        <option className="" value="">Ordenar</option>
        <option className="" value="A">A ⬆ Z</option>
        <option className="" value="D">Z ⬇ A</option>
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
        <option className="" value="A">+</option>
        <option className="" value="D">-</option>
      </select>
    </div>
  );
}