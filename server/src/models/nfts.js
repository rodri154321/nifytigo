const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('nfts', {
        id: {
            type: DataTypes.UUID, // genera un id mas largo, ocupa mas espacio en la BDD pero es mas seguro, sin colisiones
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID único
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shop:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        price: { 
            type: DataTypes.DECIMAL(10, 2), // Tipo de dato para almacenar precios en formato decimal (10 dígitos enteros y 2 decimales)
            allowNull: false,
            defaultValue: 0.00,  // podemos establecer un valor predeterminado
        },
        customCreatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Establece la fecha de creación al crear el registro
        },
    });
};