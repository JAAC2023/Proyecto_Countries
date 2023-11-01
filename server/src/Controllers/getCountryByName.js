const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getCountryByName = async (req, res) => {

  try {
    const { nombre } = req.query;
    if(!nombre) return res.status(400).send("Proporcionar el nombre de un país")
    const respuesta = await Country.findOne({ 
      where: { 
        Nombre: { 
          [Op.iLike]: nombre 
        } 
      },
      include:{
        model:Activity,
        through:{
          attributes:[]
        },
      } 
    });
    if (!respuesta) return res.status(404).send("No se encontró ningún registro con el nombre proporcionado")
    res.status(200).json(respuesta);

  } catch (error) {
    res.status(500).send("Error en la extracción de información de la base de datos");
  }
}

module.exports = getCountryByName;