require("dotenv").config();
const server = require("./src/server");
const { conn } = require('./src/db.js');

const { PORT_SERVER } = process.env;

server.listen(PORT_SERVER, async () => {
  await conn.sync({ altern: true })
  console.log(`Server listening on port ${PORT_SERVER}`);
});
