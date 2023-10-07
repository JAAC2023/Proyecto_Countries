const { Op } = require("sequelize");
const { Country, Activity} = require("../db");

const getCountryById = async (req, res) => {

  try {
    const { id } = req.params;

    if(!id) return res.status(400).json({mensaje: "No hay información"})
  
    const respuesta = await Country.findOne({ 
      where: { 
        id: { 
          [Op.iLike]: id 
        } 
      },   
    }, {
      include:{
        model:Activity,
        attributes:["Nombre"],
        through:{
          attributes:[]
        },
      }});

    if (!respuesta) return res.status(404).json({mensaje: "No se encontró ningún registro con la id proporcionada."})

    res.json (respuesta);

  } catch (error) {
    res.json({mensaje: "Error en la extracción de datos de la base de datos"});
  }
}

module.exports = getCountryById;