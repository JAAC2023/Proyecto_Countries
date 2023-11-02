import "./Cards.css";
import { useState } from "react";
import { casosCards } from "../filtros/filtrosCards";
import Card from "../../Card/Card";
import estados from "../../../utils/estadosGlobales";

export default function Cards() {
  const { todosLosPaises } = estados();// me tarigo del estado global todos los paises
  const [paginaActual, setPaginaActual] = useState(1);//Estado local que inicializa en 1
  const cardsPorPagina = 10;//constante de Cards que se muestran por pagina.
  const comienzo = (paginaActual - 1) * cardsPorPagina; // constante que calcula el índice de inicio de las tarjetas que se mostrarán en la página actual
  const final = comienzo + cardsPorPagina; // constante que calcula el índice final de las tarjetas que se mostrarán en la página actual
  const cardsVisibles = casosCards()?.slice(comienzo, final); // constante que saca la porcion de cards para mostrar segun el caso filtro u ordemaniento
  const maximoDePaginas = Math.ceil(casosCards()?.length / cardsPorPagina);// Se calcula el número máximo de páginas necesarias para mostrar todas las tarjetas

  const handlePreviousPage = () => { // funcion que me setea el estado local en -1 para retroceder en las paginas
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const handleNextPage = () => {// funcion que me setea el estado local en +1 para avanzar en las paginas
    if (paginaActual < maximoDePaginas) setPaginaActual(paginaActual + 1);
  };

  const renderPagination = () => { // funcion que me renderiza los botones para mostrar cada pagina segun las cards disponibles
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
