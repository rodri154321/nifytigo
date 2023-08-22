const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('purchase', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID, // Cambia al tipo de dato adecuado para tu modelo de usuarios
            allowNull: false,
        },
        nftId: {
            type: DataTypes.UUID, // Cambia al tipo de dato adecuado para tu modelo de NFTs
            allowNull: false,
        },
    }, { timestamps: true });

};