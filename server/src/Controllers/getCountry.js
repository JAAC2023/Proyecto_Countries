const { Country } = require("../db");

const getCountry = async (req, res) => {
  try {
  
    const respuesta = await Country.findAll();
    res.json (respuesta);

  } catch (error) {
    res.json({mensaje: "Error en la extracción de datos de la base de datos"});
  }
}

module.exports = getCountry;