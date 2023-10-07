const { Activity, Country } = require("../db");

const getActivities = async (req, res) => {
  try {
  
    const activities = await Activity.findAll({
      include:{
        model:Country,
        attributes:["Nombre"],
        through:{
          attributes:[]
        },
      }});
    res.json (activities);

  } catch (error) {
    res.json({mensaje: "Error en la extracción de datos de la base de datos"});
  }
}

module.exports = getActivities;