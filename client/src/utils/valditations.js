export default function validation({ Nombre, Duración, Dificultad,Temporada, Paises }) {

  let error = {};
  let rxGramatical = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/
  let rxLetraRepetida = /^(?!.*(\w)\1)[A-Za-z]*$/; 
  let rxPalabraRepetida = /^(?!.*\b(\w+)\b\s\b\1\b)([A-Za-z]+\s[A-Za-z]+(\s[A-Za-z]+)?)$/;
  let rx3ConsVocSeguidas = /^(?:(?![aeiouAEIOU]{3})[a-zA-Z])*(?:(?![b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]{3})[a-zA-Z])*$/i
  let duracionArray = Duración.split(""); 
  

  const hayNumeroDel0Al9 = duracionArray.some((elemento) => {
    const numero = Number(elemento);
    return numero >= 0 && numero <= 9;
  });
  

  if (Nombre.length > 4 ) {
    if (rxGramatical.test(Nombre) || rxLetraRepetida.test(Nombre) ) error.Nombre = "Bien ✔"; 
    if (rxPalabraRepetida.test(Nombre) || rx3ConsVocSeguidas.test(Nombre)) error.Nombre = "Bien ✔"; 
    else error.Nombre = "Debe ser un nombre valido";
  } else error.Nombre = "Debe ser un nombre valido"
  

  

  if (!Nombre) error.Nombre = "Este campo no puede estar vacio";
  if (!Duración) error.Duración = "Este campo no puede estar vacio";
  if (!Dificultad) error.Dificultad = "Este campo no puede estar vacio";
  else error.Dificultad = "Bien ✔"
  if (!Temporada) error.Temporada = "Este campo no puede estar vacio";
  else error.Temporada = "Bien ✔"
  if (Paises.length === 0) error.Paises = "Debe seleccionar por lo menos un país";
  else error.Paises = "Bien ✔"
  if (Nombre.length > 30) error.Nombre = "Debe tener menos de 30 caracteres";

  if (Duración > 50) error.Duración = "No debería superar las 50 horas";
  else if (Duración < 5) error.Duración = "La actividad debe ser de mínimo 5 horas";
  else if (hayNumeroDel0Al9) error.Duración = "Bien ✔";
          else error.Duración = "Debe contener al menos un numero";
      
  return error
};