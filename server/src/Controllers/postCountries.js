const { Country } = require("../db");

const downloadCountry = require("./downloadCountry");


const postCountries = async (req, res) => {

  try {
  
    let data = await downloadCountry();
    const respuesta = await Country.bulkCreate(data);
    
    res.json (respuesta);

  } catch (error) {
    res.json({mensaje: "Error al cargar la información en la base de datos"});
  }
}

module.exports = postCountries;