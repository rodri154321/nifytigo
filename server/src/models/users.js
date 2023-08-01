const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
<<<<<<< HEAD
        id: {
            type: DataTypes.UUID, // genera un id mas largo, ocupa mas espacio en la BDD pero es mas seguro, sin colisiones
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID único
            primaryKey: true,
            allowNull: false,
        },
        name: {
=======
        name: { 
>>>>>>> 16eb18654bc5932c74239b915cf0d6f304f328fd
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
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};