require("dotenv").config();
const { PORT_SERVER } = process.env;
const server = require("./src/server");
const { conn } = require("./src/db.js");
const loadCountriesDB = require("./src/Controllers/loadCountriesDB");

server.listen(PORT_SERVER, async () => {
  await conn.sync({ altern: true });
  console.log(`Server listening on port ${PORT_SERVER}`);
  loadCountriesDB();
});
