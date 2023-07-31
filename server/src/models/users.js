const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            allwNull: false,
        },
    });
};