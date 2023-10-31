import './SearchBar.css'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterActiv, filterConti, orderABC, orderPOB, } from '../../Redux/action';

export default function SearchBar({ searchCountries, searchCountry, searchAvtivities }) {
  
  const location = useLocation(); // Hook para verificar la extension de la url actual de la pagina
  const dispatch = useDispatch(); // Hook que hace dispacth a la accionCreator
  const [select1, setSelect1] = useState(''); // Estado local para setear el Select de ordenABC
  const [select2, setSelect2] = useState(''); // Estado local para setear el Select de ordenPob
  const [select3, setSelect3] = useState(''); // Estado local para setear el Select de filterConti
  const [select4, setSelect4] = useState(''); // Estado local para setear el Select de filterActiv
  const [pais, setPais] = useState({nombre: "" }); // Estado local para guardar lo escrito en el input de buscar
  const paisPorNombre = useSelector((state) => state.paisPorNombre); // Trae el estado Global de los paises seleccionados por Nombre
  const todosLosPaises = useSelector((state) => state.todosLosPaises); // Trae el estado Global de todos los paises
  const actividades = useSelector((state) => state.actividades); // Trae el estado Global de todos las actividades
  
  useEffect(() => searchCountries(),[]);
  useEffect(() => searchAvtivities(),[]);

  const actividadesSelect = () => {
    let array1 = ["Todo"]
    let mapeo = actividades?.map((pais) => pais.Nombre)
    return array1.concat(mapeo)
  }
  
  const continentesSelect = () => {
    let array1 = ["Todo"] // Arreglo para poner el caso defecto del Select-option
    const mapeo = todosLosPaises?.map((pais)=> pais.Continente); // Trae todos los continentes pero repetidos.
    const conjunto = new Set(mapeo); // saca un conjunto de los que se repiten.
    const array2 = Array.from(conjunto);// Convierte el conjunto en un arreglo.
    return array1.concat(array2) // Retorna el array de "Todos" junto con los continentes seleccionados.
  }


  const buscarPais = (pais) => { // Funcion encargada de buscar el pais y setear el input de busqueda
    if (pais.nombre !== "") {
      let mapeo = paisPorNombre?.map((pais) => pais.Nombre.toUpperCase());
      let paisInputMayus = pais.nombre.toUpperCase();
      if (!mapeo.includes(paisInputMayus)) {
        setPais({nombre:""})
        return searchCountry(pais)
      } else window.alert ("Ya existe este país en la lista")
    } else window.alert("Por favor ingresa un nombre")
    
  }

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
    setSelect4("Todo")
  };

  const handlerFilterActiv = (event) => {
    dispatch(filterActiv(event.target.value));
    setSelect4(event.target.value)
    setSelect3("Todo")
  };

  const reestablecer = () =>{
    dispatch(orderABC(""))
    setSelect1("");
    dispatch(orderPOB(""))
    setSelect2("");
    dispatch(filterConti("Todo"))
    setSelect3("Todo")
    dispatch(filterActiv("Todo"))
    setSelect4("Todo")
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
        {continentesSelect()?.map((option) => (
          <option className="" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label>  Por Actividad Turistica: </label>
      <select value={select4} className="" onChange={handlerFilterActiv}>
        {actividadesSelect()?.map((option) => (
          <option className="" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={() => reestablecer()}>resstablecer</button>

      <NavLink to={'/'}>
      <button className="home">Cerrar</button>
      </NavLink>
    </div>
    )
}