require("dotenv").config();
const { PORT_SERVER } = process.env;
const server = require("./src/server");
const { conn } = require("./src/db.js");
const loadCountriesDB = require("./src/Controllers/loadCountriesDB");

server.listen(PORT_SERVER, async () => {
  await conn.sync({ force: true });
  console.log(`Servidor escuchando en el puerto ${PORT_SERVER}`);
  loadCountriesDB();
});