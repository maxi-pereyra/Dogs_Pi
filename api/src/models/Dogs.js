const { DataTypes, UUIDV4 } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Dogs', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4 // algoritmo que me genera UUid
      },
      
      image:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "no hay imagen por el momento",
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      height:{
        type: DataTypes.STRING,
        allowNull: false
      },
      weight:{
        type: DataTypes.STRING,
        allowNull: false
      },
      life_span:{
        type: DataTypes.STRING,
        allowNull: false
      }
},
    {timestamps:false}
    );
  };