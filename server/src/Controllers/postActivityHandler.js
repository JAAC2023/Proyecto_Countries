const { Activity } = require("../db");
const postActivityController = require("./postActivityController");

const postActivityHandler = async (req, res) => {
  const { id, Nombre, Dificultad, Duración, Temporada, Paises } = req.body;

  try {
    if (!id || !Nombre || !Dificultad || !Duración || !Temporada || !Paises) {
      return res.status(400).send("Faltan Datos!");
    } else if (await Activity.findOne({ where: { Nombre } })) {
      throw new Error(
        `"${Nombre}" ya existe, por favor escriba otra actividad!`
      );
    } else {
      await postActivityController({id, Nombre, Dificultad, Duración, Temporada, Paises,});
      res.status(200).send(`Actividad "${Nombre}" fue creada satisfactoriamente!`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postActivityHandler;
