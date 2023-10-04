const axios = require ('axios');

const countries = [];

const URL =  "http://localhost:5000/countries";

const downloadCountry = async (req, res) => {
    try {
        const { data } = await axios.get(URL)

        if(data){
          const mapeo = data?.map(({ cca3, name, flag, continents, capital, subregion, area, population }) => {
            return {
              id:         cca3       ? cca3             : undefined,
              name:       name       ? name.common      : undefined,
              flag:       flag       ? flag             : undefined,
              continents: continents ? continents[0]    : undefined,
              capital:    capital    ? capital.join('') : undefined,
              subregion:  subregion  ? subregion        : undefined,
              area:       area       ? area             : undefined,
              population: population ? population       : undefined,
            }
          });
          res.json(mapeo)
        }

    } catch (error) {
        throw new Error ("Definitivamente no se pudo mano")
    }
}

module.exports = downloadCountry;