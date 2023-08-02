const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('collections', {
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
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2), // Tipo de dato para almacenar precios en formato decimal (10 dígitos enteros y 2 decimales)
            allowNull: false,
            defaultValue: 0.00, // podemos establecer un valor predeterminado
        },
        blockchain: {
            type: DataTypes.STRING, //"Ethereum", "Binance Smart Chain", "Polygon", etc.
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID, //clave externa que se utiliza para establecer una relacion de uno a muchos 'çollections' y
            // 'users', representa el "id" del usuario propietario de la colección de NFTs.
            allowNull: false,
            references: { //Establece una referencia a la columna "id" del modelo "users". Esto crea una relación entre la tabla 
                          //"collections" y la tabla "users" utilizando el campo "userId" como clave externa (foreign key).
                          // De esta manera, podemos identificar a qué usuario pertenece cada colección.
                model: 'users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    });
};