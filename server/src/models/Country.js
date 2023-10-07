const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injecutamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3), // Máximo 3 caracteres
      allowNull: false, // Que no sea nulo
      primaryKey: true, // Clave primaria (unica)
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Bandera: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregión: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Población: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false });
};
