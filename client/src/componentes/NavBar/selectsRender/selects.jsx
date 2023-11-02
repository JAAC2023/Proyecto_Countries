import estados from "../../../utils/estadosGlobales";
import handlers from "../handlers/handlers";

export default function selects() {
  const { todosLosPaises, actividades } = estados();

  const {
    select1,
    select2,
    select3,
    select4,
    handleOrderABC,
    handleOrderPob,
    handlerFilterActiv,
    handlerFilterConti,
    reestablecer,
  } = handlers();

  const actividadesSelect = () => {
    let array1 = ["Todo"];
    let mapeo = actividades?.map((pais) => pais.Nombre);
    return array1.concat(mapeo);
  };

  const continentesSelect = () => {
    let array1 = ["Todo"]; // Arreglo para poner el caso defecto del Select-option
    const mapeo = todosLosPaises?.map((pais) => pais.Continente); // Trae todos los continentes pero repetidos.
    const conjunto = new Set(mapeo); // saca un conjunto de los que se repiten.
    const array2 = Array.from(conjunto); // Convierte el conjunto en un arreglo.
    return array1.concat(array2); // Retorna el array de "Todos" junto con los continentes seleccionados.
  };

  return (
    <div>
      <label>Alfabeticamente: </label>
      <select value={select1} className="" onChange={handleOrderABC}>
        <option className="" value="">Seleccionar</option>
        <option className="" value="A-Z">A ⬆ Z</option>
        <option className="" value="Z-A">Z ⬇ A</option>
      </select>

      <label> Numero de habitantes: </label>
      <select value={select2} className="" onChange={handleOrderPob}>
        <option className="" value="">Seleccionar</option>
        <option className="" value="A">Ascendente</option>
        <option className="" value="D">Descendente</option>
      </select>

      <label> Por Continente: </label>
      <select value={select3} className="" onChange={handlerFilterConti}>
        {continentesSelect()?.map((option) => (
          <option className="" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label> Por Actividad Turistica: </label>
      <select value={select4} className="" onChange={handlerFilterActiv}>
        {actividadesSelect()?.map((option) => (
          <option className="" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={() => reestablecer()}>resstablecer</button>
    </div>
  );
}
