const { Activity } = require("../db.js")

const postActivityController = async ({ Nombre, Dificultad, Duración, Temporada, Paises, status, send }) => {
  try {
    const activities = await Activity.create({Nombre, Dificultad, Duración, Temporada});
    activities.addCountries(Paises)
    return activities;
  } catch (error) {
    status(500).send("No fue posible crear la actividad, verifica que los datos estén correctos")
  }
  
}

module.exports = postActivityController;