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
              Actividades: []
            }
          });
          
          return mapeo;

          } else{
            res.status(404).json({meesage: "No hay Datos"})
          }
        } catch (error) {
          res.status(500).json({meesage: "Algo salio mal con la petición"})
        }

        
}

module.exports = downloadCountry;