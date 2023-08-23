const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('buys', {
        id: {
            type: DataTypes.UUID, // genera un id mas largo, ocupa mas espacio en la BDD pero es mas seguro, sin colisiones
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID único
            primaryKey: true,
            allowNull: false,
        },
        price: {
            type:  DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.00

        },
        status: {
            type:DataTypes.STRING,
        }
    },{timestamps:false});
};
