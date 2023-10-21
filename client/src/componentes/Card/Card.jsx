import "./Card.css"
import { NavLink } from "react-router-dom";

function Card({ id, Nombre, Bandera, Continente, Capital, Subregión, Area, Población, onClose }) {

  if (!id) {
    return(
      <div>...Cargando</div>
      )
  }
  
   return (
      <div id={id}>

         <button onClick={()=>onClose(id)}>X</button>
         <h1 >{id}</h1>
         <h1 >{Nombre}</h1>
         <h1>{Continente}</h1>
         <NavLink to={`/detail/${id}`}>
            <img src={Bandera} alt="" className=""/>
         </NavLink>   
         
      </div>
   );
}

export default Card;

