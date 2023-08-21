const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        id: {
            type: DataTypes.UUID, // genera un id mas largo, ocupa mas espacio en la BDD pero es mas seguro, sin colisiones
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID único
            primaryKey: true,
            unique: true
        },
        username: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cellPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin: { 
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        image: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        customCreatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Establece la fecha actual al crear un registro
        },
    },
    {timestamps:false});
}; 