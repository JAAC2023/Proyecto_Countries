import "./Cards.css";
import { useState } from "react";
import { casosCards } from "../filtros/filtrosCards";
import Card from "../../Card/Card";
import estados from "../../../utils/estadosGlobales";

export default function Cards() {
  const { todosLosPaises } = estados();
  const [paginaActual, setPaginaActual] = useState(1);
  const cardsPorPagina = 10;
  const comienzo = (paginaActual - 1) * cardsPorPagina;
  const final = comienzo + cardsPorPagina;
  const cardsVisibles = casosCards()?.slice(comienzo, final);
  const maximoDePaginas = Math.ceil(todosLosPaises?.length / cardsPorPagina);

  const handlePreviousPage = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const handleNextPage = () => {
    if (paginaActual < maximoDePaginas) setPaginaActual(paginaActual + 1);
  };

  const renderPagination = () => {
    const paginas = [];
    for (let i = 1; i <= maximoDePaginas; i++) {
      paginas.push(
        <div className="botonPagina">
          <button
            key={i}
            onClick={() => setPaginaActual(i)}
            className={i === paginaActual ? "pagina" : "paginas"}
          >
            {i}
          </button>
        </div>
      );
    }
    return paginas;
  };

  return (
    <div className="cards">
      {cardsVisibles?.map((pais) => (
        <Card
          key={pais?.id}
          id={pais?.id}
          Nombre={pais?.Nombre}
          Bandera={pais?.Bandera}
          Continente={pais?.Continente}
          Capital={pais?.Capital}
          Subregión={pais?.Subregión}
          Area={pais?.Area}
          Población={pais?.Población}
        />
      ))}
      <div>
        <button
          className="anterior"
          onClick={handlePreviousPage}
          disabled={paginaActual === 1}
        >
          ◀
        </button>
        {renderPagination()}
        <button
          className="siguiente"
          onClick={handleNextPage}
          disabled={paginaActual * cardsPorPagina >= todosLosPaises?.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
