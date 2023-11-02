import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import estados from "../../../utils/estadosGlobales";
import handlers from "../handlers/handlers";
import selects from "../selectsRender/selects";

export default function Nav({
  searchCountries,
  searchCountry,
  searchAvtivities,
}) {
  const location = useLocation();
  const { paisPorNombre } = estados();
  const { pais, setPais, handleChange } = handlers();

  useEffect(() => searchCountries(), []);
  useEffect(() => searchAvtivities(), []);

  const buscarPais = (pais) => {
      let mapeo = paisPorNombre?.map((pais) => pais.Nombre.toUpperCase());
      let paisInputMayus = pais.nombre.toUpperCase();
      if (!mapeo.includes(paisInputMayus)) {
        setPais({ nombre: "" });
        return searchCountry(pais);
      } else window.alert("Ya existe este país en la lista");
  };
  //-------------display de la searchBar para crear activididad--------------
  const display = "NavBar";
  const displayNone = "none";
  //-------------------------------------------------------------------------

  return (
    <div className={location.pathname === "/activity" ? displayNone : display}>
      <NavLink to={"/home"}>
        <button className="home">HOME</button>
      </NavLink>

      <NavLink to={"/activity"}>
        <button className="">Crear Actividad</button>
      </NavLink>

      <NavLink to={"/activity/list"}>
        <button className="" onClick={() => searchAvtivities()}>
          Lista de Actividades
        </button>
      </NavLink>

      <input
        type="text"
        onChange={handleChange}
        className=""
        value={pais.nombre}
      />
      <NavLink to={"/home/name"}>
        <button className="" onClick={() => buscarPais(pais)}>
          Buscar
        </button>
      </NavLink>

      <NavLink to={"/home/name"}>
        <button className="home">Lista de Busqueda</button>
      </NavLink>
      <p></p>

      {selects()}

      <NavLink to={"/"}>
        <button className="home">Cerrar</button>
      </NavLink>
    </div>
  );
}
