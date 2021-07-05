const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
    allowNull: false,
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    defense:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    imga:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    types:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    imgashiny:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
