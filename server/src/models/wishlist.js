const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('wishlist', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'My Wishlist', // Nombre predeterminado para la lista de deseos si no se proporciona uno
        },
        description: {
            type: DataTypes.TEXT,
        },
    });
};