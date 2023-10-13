const { Country } = require("../db");
const downloadCountry = require("./downloadCountry");

const loadCountriesDB = async (req, res) => {
  try {
    if (!await Country.findOne({ where: { id: "KEN"} })) {
      let data = await downloadCountry();
    const countries = await Country.bulkCreate(data);
    return countries;
    };
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Error al cargar los paises en la base de datos");
  }
}

module.exports = loadCountriesDB;