const { Country, Activity } = require("../db.js")

const postActivityController = async ({ id, Nombre, Dificultad, Duración, Temporada, Paises }) => {

  const activities = await Activity.create({id, Nombre, Dificultad, Duración, Temporada});

  activities.addCountries(Paises)

  return activities;
}

module.exports = postActivityController;