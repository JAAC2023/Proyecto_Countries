import "./Card.css"
//import { NavLink, useLocation } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { useState } from "react"; //React.useState
//import { addFav, removeFav } from "../../Redux/action";

function Card({ id, Nombre, Bandera, Continente, Capital, Subregión, Area, Población }) {

   //const [isFav, setIsFav] = useState(false);
   //const location = useLocation();
   //const dispatch = useDispatch();
   //const removeFavorite = (id) => dispatch(removeFav(id));
   //const addFavorite = (character) => dispatch(addFav(character));

  //  const handleFavorite = () => {
  //     if (isFav) {
  //        removeFavorite(id);
  //        setIsFav(false);
  //     } else {
  //        addFavorite({ id, name, image, gender, status, species, origin, });
  //        setIsFav(true);
         
  //     }
  //  };

   return (
      <div id={id}>

         <h1 >{id}</h1>
         <h1 >{Nombre}</h1>
         <h1>{Continente}</h1>
         
         {/* <NavLink to={`/detail/${id}`}> */}
            <img src={Bandera} alt="" className=""/>
         {/* </NavLink> */}
         
      </div>
   );
}

export default Card;