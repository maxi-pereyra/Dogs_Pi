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
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Se requiere una imagen para poder crearse',
          },
          isUrl: {
            msg: 'La imagen tiene que ser una url válida',
          },
        },
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len:{
            args:[4,15],
            msg:"el nombre solo puede tener entre 4 y 15 caracteres"
          }
        }
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