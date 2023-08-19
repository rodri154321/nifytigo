const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('nftsComprada', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        userId:{
             type: DataTypes.STRING,
            allowNull: true,
        },
        nftId:{
            type: DataTypes.STRING,
            allowNull: true,
        }
        // Agrega las propiedades relacionadas con las NFTs compradas
    }, { timestamps: false });

};
