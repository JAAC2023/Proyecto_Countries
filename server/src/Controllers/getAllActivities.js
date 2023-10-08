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
    res.status(200).json(activities);

  } catch (error) {
    res.status(500).send("No se encontro ninguna actividad, por favor ingrese una")
  };
}

module.exports = getActivities;