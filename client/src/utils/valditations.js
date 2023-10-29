// export default function validation({ email, password }) {
//   // input -> {email:"d", password:""}
//   let error = {};
//   let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
//   let passwordArray = password.split(""); 

//   const hayNumeroDel0Al9 = passwordArray.some((elemento) => {
//       const numero = Number(elemento);
//       return numero >= 0 && numero <= 9;
//       });
  
//   if (!regexEmail.test(email)) error.email = "Debe ser un email valido";
//   else error.email = "Correcto ✔";

//   if (!email)error.email = "Este campo no puede estar vacio";

//   if (email.length > 35) error.email = "Debe tener menos de 35 caracteres";

//   if (password.length < 6 || password.length > 10) error.password = "Debe tener una longitud entre 6 y 10 caracteres";
//   else if (hayNumeroDel0Al9) error.password = "Correcto ✔";
//           else error.password = "Debe contener al menos un numero";
      
//   return error;