import './SearchBar.css'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterConti, orderABC, orderPOB, } from '../../Redux/action';

export default function SearchBar({ searchCountries, searchCountry, searchAvtivities}) {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const continentes = ["Todo", "Africa", "Europe", "Oceania", "Asia", "North America", "South America"];
  const [pais, setPais] = useState({nombre: "" });
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');
  const [select3, setSelect3] = useState('');

  // const continentes = () => {
  //   const todosLosPaises = useSelector((state) => state.todosLosPaises);
  //   const mapeo = todosLosPaises?.map((pais)=> pais.Continente);
  //   const conjunto = new Set(mapeo);
  //   const arreglo = Array.from(conjunto);
    
  //   return arreglo
  // }

  const buscarPais = (pais) => {
    setPais({nombre:""})
    return searchCountry(pais)
  }

  useEffect(() => searchCountries(),[]);

  const handleChange = (event) =>{
    setPais({nombre: event.target.value});
  };

  const handleOrderABC = (event) => {
    dispatch(orderABC(event.target.value));
    setSelect1(event.target.value)
    setSelect2("")
  };

  const handleOrderPob = (event) => {
    dispatch(orderPOB(event.target.value));
    setSelect2(event.target.value)
    setSelect1("")
  };

  const handlerFilterConti = (event) => {
    dispatch(filterConti(event.target.value));
    setSelect3(event.target.value)
  };

  const reestablecer = () =>{
    dispatch(orderABC(""))
    setSelect1("");
    dispatch(orderPOB(""))
    setSelect2("");
    dispatch(filterConti("Todo"))
    setSelect3("Todo")
  }

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
        <button className="" onClick={() => buscarPais(pais)}>Buscar</button>
      </NavLink>

      <NavLink to={'/home/name'}>
      <button className="home">Lista de Busqueda</button>
      </NavLink>
      <p></p>

      <label>Alfabeticamente: </label>
      <select value={select1} className="" onChange={handleOrderABC}>
        <option className="" value="">Seleccionar</option>
        <option className="" value="A-Z">A ⬆ Z</option>
        <option className="" value="Z-A">Z ⬇ A</option>
      </select>

      <label>  Numero de habitantes: </label>
      <select value={select2} className="" onChange={handleOrderPob}>
        <option className="" value="">Seleccionar</option>
        <option className="" value="A">Ascendente</option>
        <option className="" value="D">Descendente</option>
      </select>

      <label>  Por Continente: </label>
      <select value={select3} className="" onChange={handlerFilterConti}>
        {continentes.map((option) => (
          <option className="" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={() => reestablecer()}>Reestablecer</button>
    </div>
    )
}