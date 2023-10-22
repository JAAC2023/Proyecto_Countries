import "./Cards.css"
import Card from "../Card/Card";

export default function Cards({ paisPorNombre, onClose }) {

   return (
      <div>
         <h1 className="">HOME</h1>
         
         {paisPorNombre?.map(({ id, Nombre, Bandera, Continente, Capital, Subregión, Area, Población }) => (
         <Card
            key={id}
            id={id}
            Nombre={Nombre}
            Bandera={Bandera}
            Continente={Continente}
            Capital={Capital}
            Subregión={Subregión}
            Area={Area}
            Población={Población}
            onClose={onClose}
         />
         ))}
      </div>
   )
}