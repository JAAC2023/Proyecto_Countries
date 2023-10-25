import "./Cards.css"
import Card from "../Card/Card";

export default function Cards({ todosLosPaises }) {

   return (
      <div>
         
         {todosLosPaises?.map((pais) => (
         <Card
            key={pais.id}
            id={pais.id}
            Nombre={pais.Nombre}
            Bandera={pais.Bandera}
            Continente={pais.Continente}
            Capital={pais.Capital}
            Subregión={pais.Subregión}
            Area={pais.Area}
            Población={pais.Población}
         />
         ))}
      </div>
   )
}