import './FormActivity.css'
import { NavLink } from "react-router-dom";
import handlers from "../handlers/handlers";
import estados from "../../../utils/estadosGlobales";

const FormActivity = ({ postActivity }) => {
  const {
    errores,
    activity,
    tempo,
    difil,
    multPaises,
    handleChange,
    handleChangeDificultad,
    handleChangeTemporada,
    handleSelectChangePais,
  } = handlers();

  const temporada = ["", "Verano", "Otoño", "Invierno", "Primavera"];
  const dificultad = ["", 1, , 2, 3, 4, 5];
  const { todosLosPaises } = estados();
  const mapeo = todosLosPaises?.map(({ id, Nombre }) => ({ id, Nombre }));
  const paises = mapeo.sort((a, b) => a.Nombre.localeCompare(b.Nombre));

  const handleSubmit = (event) => {
    event.preventDefault();
    postActivity(activity);
  };

  return (
      <form onSubmit={handleSubmit} className="form">
      <NavLink to={"/home"}>
        <button className="home">HOME</button>
      </NavLink>

      <div>
        <label className="">Nombre: </label>
        <input
          className=""
          type="text"
          onChange={handleChange}
          value={activity.Nombre}
          name="Nombre"
        />
        <label>... {activity.Nombre}</label>
        {errores.Nombre ? <p>{errores.Nombre}</p> : <p>...</p>}

        <p> </p>

        <label className="">Dificultad: </label>
        <select className="" onChange={handleChangeDificultad}>
          {dificultad.map((opcion) => (
            <option className="" key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
        <label>... {difil}</label>
        {errores.Dificultad ? <p>{errores.Dificultad}</p> : <p>...</p>}

        <p> </p>

        <label className="">Duración: </label>
        <input
          className=""
          type="number"
          onChange={handleChange}
          value={activity.Duración}
          name="Duración"
        />
        <label>... {activity.Duración} Horas</label>
        {errores.Duración ? <p>{errores.Duración}</p> : <p>...</p>}

        <p></p>

        <label className="">Temporada: </label>
        <select className="" onChange={handleChangeTemporada}>
          {temporada.map((opcion) => (
            <option className="" key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
        <label>... {tempo}</label>
        {errores.Temporada ? <p>{errores.Temporada}</p> : <p>...</p>}

        <p> </p>

        <label className="">Pais: </label>
        <select multiple={true} className="" onChange={handleSelectChangePais}>
          {paises?.map(({ Nombre, id }) => (
            <option className="" key={Nombre} value={[id]}>
              {Nombre} ({id})
            </option>
          ))}
        </select>
        {errores.Paises ? <p>{errores.Paises}</p> : <p>...</p>}
        <p>
            Seleccionados: {multPaises.map((item, index) => (
              typeof item === "string" ? (
              // Si es una cadena de texto, simplemente mostrarla
              item
              ) : (
                JSON.stringify(item)
              )
              )).join(", ")
            }
            
        </p>
        
      </div>
      <div>
        <button type="submit" >ENVIAR</button>
      </div>
    </form>
    
  );
};

{/* <p>Seleccionados: {multPaises.join(", ")}</p> */}

export default FormActivity;
