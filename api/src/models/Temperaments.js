const { DataTypes, UUIDV4 } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('Temperaments', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    temperament: {
      type: DataTypes.STRING, //si es un array de objetos Datatypes.JSON
      allowNull: false,
    },
  },
  {timestamps:false}
  );
};