const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('nftsComprada', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Agrega las propiedades relacionadas con las NFTs compradas
    }, { timestamps: false });

};
