import estados from "../../../utils/estadosGlobales";

const filtros = () => {
  const { orderABCD, orderPobl, filtroActivi, filtroContin } = estados();

  const alfabeto = (copiaEstado) => {
    let orden = [...copiaEstado]?.sort((a, b) => {
      return orderABCD === "A-Z"
        ? a.Nombre.localeCompare(b.Nombre)
        : b.Nombre.localeCompare(a.Nombre);
    });
    return orden;
  };

  const poblacion = (copiaEstado) => {
    let orden = [...copiaEstado]?.sort((a, b) => {
      return orderPobl === "A"
        ? a.Población - b.Población
        : b.Población - a.Población;
    });
    return orden;
  };

  const continente = (copiaEstado) => {
    copiaEstado = [...copiaEstado]?.filter(
      (pais) => pais.Continente === filtroContin
    );
    return copiaEstado;
  };

  const actividad = (copiaEstado) => {
    let filtro = [...copiaEstado]?.filter((pais) => {
      let actividades = pais.Activities?.flatMap((pa) => pa.Nombre);
      return actividades?.includes(filtroActivi);
    });
    return filtro;
  };

  return { alfabeto, poblacion, continente, actividad };
};

const casosCards = () => {
  const { alfabeto, poblacion, continente, actividad } = filtros();
  const { orderABCD, orderPobl, filtroActivi, filtroContin, todosLosPaises } = estados();
  const paises = [...todosLosPaises];

  switch (true) {
    case orderABCD !== "":
      return alfabeto(paises);
    case orderPobl !== "":
      return poblacion(paises);
    case filtroContin !== "Todo":
      return continente(paises);
    case filtroActivi !== "Todo":
      return actividad(paises);
    default:
      return paises;
  }
};

const casosCardsName = () => {
  const { alfabeto, poblacion, continente, actividad } = filtros();
  const { orderABCD, orderPobl, filtroActivi, filtroContin, paisPorNombre } = estados();
  const paisesNombre = [...paisPorNombre];

  switch (true) {
    case orderABCD !== "":
      return alfabeto(paisesNombre);
    case orderPobl !== "":
      return poblacion(paisesNombre);
    case filtroContin !== "Todo":
      return continente(paisesNombre);
    case filtroActivi !== "Todo":
      return actividad(paisesNombre);
    default:
      return paisesNombre;
  }
};

export { casosCards, casosCardsName };
