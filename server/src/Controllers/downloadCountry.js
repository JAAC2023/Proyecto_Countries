require("dotenv").config();
const axios = require ('axios');

const { URL_API } = process.env;

const downloadCountry = async (req, res) => {
    
        try {
          const { data } = await axios.get(URL_API)
          if(data){
          const mapeo = data?.map(({ cca3, name, flags, continents, capital, subregion, area, population }) => {
            return {
              id:         cca3       ? cca3             : "-",
              nombre:     name       ? name.common      : "-",
              bandera:    flags      ? flags.png        : "-",
              continente: continents ? continents[0]    : "-",
              capital:    capital    ? capital[0]       : "-",
              subregion:  subregion  ? subregion        : "-",
              área:       area       ? area             : 0,
              población:  population ? population       : 0,
            }
          });
          console.log(mapeo)
          return mapeo;

          } else{
            res.status(404).json({meesage: "No hay Datos"})
          }
        } catch (error) {
          res.status(500).json({meesage: "Algo salio mal con la petición"})
        }

        
}

module.exports = downloadCountry;