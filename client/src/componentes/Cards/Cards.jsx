import "./Cards.css"
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Cards() {

  const orderABCD = useSelector((state) => state.orderABC);
  const orderPobl = useSelector((state) => state.orderPob);
  const filtroContin = useSelector((state) => state.filtroConti);
  const filtroActivi = useSelector((state) => state.filtroActiv);
  const todosLosPaises = useSelector((state) => state.todosLosPaises);

  const filtros = (paises = [...todosLosPaises]) => {

    switch (true) {
      
      case orderABCD !== "":
        paises = [...paises].sort((a, b) => {
          return orderABCD === "A-Z" ?
            a.Nombre.localeCompare(b.Nombre) :
            b.Nombre.localeCompare(a.Nombre);
        });
        break;
  
      case orderPobl !== "":
        paises = [...paises].sort((a, b) => {
          return orderPobl === "A" ? a.Población - b.Población : b.Población - a.Población;
        });
        break;
  
      case filtroContin !== "Todo":
        paises = [...paises].filter(pais => pais.Continente === filtroContin);
        break;
  
      case filtroActivi !== "Todo":
        paises = paises.filter(pais => {
          let actividades = pais.Activities.flatMap(pa => pa.Nombre);
          return actividades.includes(filtroActivi);
        });
        break;
  
      default:
        return paises
    }
  
    return paises;
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

  let maximoDePaginas = Math.ceil(todosLosPaises.length / cardsPorPagina)

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
          className={i === paginaActual ? 'active' : ''}>
          {i}
        </button>
      );
    }
    return pages;
  };

   return (
      <div className="cards">
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
         />
         ))}
         <div>
          <button className="anterior" onClick={handlePreviousPage} disabled={paginaActual === 1}>Anterior</button>
          {renderPagination()}
          <button className="siguiente" onClick={handleNextPage} disabled={paginaActual * cardsPorPagina >= todosLosPaises.length}>Siguiente</button>
         </div>
      </div>
   )
}