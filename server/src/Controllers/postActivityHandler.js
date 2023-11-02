const { Op } = require("sequelize");
const { Activity } = require("../db");
const postActivityController = require("./postActivityController");

const postActivityHandler = async (req, res) => {
  const { Nombre, Dificultad, Duración, Temporada, Paises } = req.body;

  try {
    if (!Nombre || !Dificultad || !Duración || !Temporada || !Paises) {
      throw new Error('Faltan Datos!');
    } else if (await Activity.findOne({ where: { Nombre: { [Op.iLike]: Nombre } } })) {
      throw new Error(
        `"${Nombre}" ya existe, por favor escriba otra actividad!`
      );
    } else {
      await postActivityController({ Nombre, Dificultad, Duración, Temporada, Paises,});
      res.status(201).send(`Actividad "${Nombre}" fue creada satisfactoriamente!`);
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = postActivityHandler;
