import "./CardsByName.css"
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function CardsForName({ onClose }) {

  const orderABCD = useSelector((state) => state.orderABC);
  const orderPobl = useSelector((state) => state.orderPob);
  const filtroContin = useSelector((state) => state.filtroConti);
  const filtroActivi = useSelector((state) => state.filtroActiv);
  const paisPorNombre = useSelector((state) => state.paisPorNombre);

  const filtros = (paisesNombre = [...paisPorNombre]) => {
  
    switch (true) {

      case orderABCD !== "":
        paisesNombre = [...paisesNombre].sort((a, b) => {
          return orderABCD === "A-Z" ?
            a.Nombre.localeCompare(b.Nombre) :
            b.Nombre.localeCompare(a.Nombre);
        });
        break;
  
      case orderPobl !== "":
        paisesNombre = [...paisesNombre].sort((a, b) => {
          return orderPobl === "A" ? a.Población - b.Población : b.Población - a.Población;
        });
        break;
  
      case filtroContin !== "Todo":
        paisesNombre = [...paisesNombre].filter(pais => pais.Continente === filtroContin);
        break;
  
      case filtroActivi !== "Todo":
        paisesNombre = paisesNombre.filter(pais => {
          let actividades = pais.Activities.flatMap(pa => pa.Nombre);
          return actividades.includes(filtroActivi);
        });
        break;

        default:
          return paisesNombre
    }
  
    return paisesNombre;
  };

  const [paginaActual, setPaginaActual] = useState(1);
  const cardsPorPagina = 10;

  const comienzo = (paginaActual - 1) * cardsPorPagina;
  const final = comienzo + cardsPorPagina;
  const cardsVisibles = filtros().slice(comienzo, final);

  const handlePreviousPage = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  let maximoDePaginas = Math.ceil(paisPorNombre.length / cardsPorPagina)

  const handleNextPage = () => {
    if (paginaActual < maximoDePaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= maximoDePaginas; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPaginaActual(i)}
          className={i === paginaActual ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pages;
  };


   return (
    <div>
      {cardsVisibles?.map((pais) => (
        <Card
          key={pais.id}
          id={pais.id}
          Nombre={pais.Nombre}
          Bandera={pais.Bandera}
          Continente={pais.Continente}
          Capital={pais.Capital}
          Subregión={pais.Subregión}
          Area={pais.Area}
          Población={pais.Población}
          onClose={onClose}
        />
      ))}
      <div>
          <button onClick={handlePreviousPage} disabled={paginaActual === 1}>Anterior</button>
          {renderPagination()}
          <button onClick={handleNextPage} disabled={paginaActual * cardsPorPagina >= paisPorNombre.length}>Siguiente</button>
        </div>
    </div>
  )
}