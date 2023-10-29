import "./Card.css"
import { NavLink, useLocation } from "react-router-dom";

function Card({ id, Nombre, Bandera, Continente, Capital, Subregión, Area, Población, onClose }) {

  const location = useLocation()
  const mayuscula = Continente.toUpperCase()
  
   return (
    <div id={id} className="card">
      {location.pathname === '/home/name'?
        <button className="cerrar"onClick={()=>onClose(id)}>❌</button> : 
        <NavLink to={`/detail/${id}`}>
          <button className="cerrar">👀</button>
        </NavLink> }
         
      <h1 className="nombre">{Nombre}</h1>
      <h1 className="continente">{mayuscula}</h1>
         
      {location.pathname === '/home/name'?
        <NavLink to={`/detail/${id}`}>
          <img src={Bandera} alt="" className="bandera"/>
        </NavLink> :
        <img src={Bandera} alt="" className="bandera"/> 
      } 
    </div>
   );
}

export default Card;