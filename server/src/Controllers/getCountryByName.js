const { Op } = require("sequelize");
const { Country } = require("../db");

const getCountryByName = async (req, res) => {

  try {
    const { nombre } = req.query;

    if(!nombre) return res.status(400).json({mensaje: "No hay información"})

    const respuesta = await Country.findOne({ where: { Nombre: { [Op.iLike]: nombre } } });

    if (!respuesta) return res.status(404).json({mensaje: "No se encontró ningún registro con el nombre proporcionado."})

    res.json(respuesta);

  } catch (error) {
    res.json({mensaje: "Error en la extracción de datos de la base de datos"});
  }
}

module.exports = getCountryByName;