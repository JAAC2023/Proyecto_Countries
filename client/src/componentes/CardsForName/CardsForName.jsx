import "./CardsForName.css"
import Card from "../Card/Card";

export default function CardsForName({ paisPorNombre, onClose }) {

   return (
    <div>
      {paisPorNombre?.map((pais) => (
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
          onClose={onClose}
        />
      ))}
    </div>
  )
}