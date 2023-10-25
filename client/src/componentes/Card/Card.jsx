import "./Card.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Card({ id, Nombre, Bandera, Continente, Capital, Subregión, Area, Población, onClose }) {

  const location = useLocation()
  
   return (
      <div id={id}>
        {location.pathname === '/home/name'? <button onClick={()=>onClose(id)}>❌</button> : ""}
         
         <h1>{Nombre}</h1>
         <h1>{Continente}</h1>
         <NavLink to={`/detail/${id}`}>
            <img src={Bandera} alt="" className=""/>
         </NavLink>   
      </div>
   );
}

export default Card;