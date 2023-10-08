require("dotenv").config();
const axios = require ('axios');
const { URL_API } = process.env;

const downloadCountry = async (req, res) => {
        try {
          const { data } = await axios.get(URL_API)
          if(data){
          const mapeo = data?.map(({ cca3, name, flags, continents, capital, subregion, area, population }) => {
            return {
              id:          cca3       ? cca3             : "-",
              Nombre:      name       ? name.common      : "-",
              Bandera:     flags      ? flags.png        : "-",
              Continente:  continents ? continents[0]    : "-",
              Capital:     capital    ? capital[0]       : "-",
              Subregión:   subregion  ? subregion        : "-",
              Area:        area       ? area             : 0,
              Población:   population ? population       : 0,
            }
          })
          return mapeo;
          } else{
            res.status(404).send("No hay información de paises")
          }
        } catch (error) {
          res.status(500).send("Error en la descarga de los paises")
        }

        
}

module.exports = downloadCountry;