const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
  try {
  
    const respuesta = await Country.findAll({
      include:{
        model:Activity,
        through:{
          attributes:[]
        },
      }});
    res.json (respuesta);

  } catch (error) {
    res.json({mensaje: "Error en la extracción de datos de la base de datos"});
  }
}

module.exports = getCountries;