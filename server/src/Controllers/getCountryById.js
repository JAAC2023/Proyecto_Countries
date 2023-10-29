const { Op } = require("sequelize");
const { Country, Activity} = require("../db");

const getCountryById = async (req, res) => {

  try {
    const { id } = req.params;
    if(!id) return res.status(400).send("Proporcionar el id de un país")
    const country = await Country.findOne({ 
      where: { 
        id: {
          [Op.iLike]: id
        }
      },   
      include:{
        model:Activity,
        through:{
          attributes:[]
        },
      }});

    res.status(200).json (country);
    return;

  } catch (error) {
    res.json({mensaje: "Error en la extracción de información de la base de datos"});
  }
}

module.exports = getCountryById;