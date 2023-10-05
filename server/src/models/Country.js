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
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    área: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    población: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false });
};
