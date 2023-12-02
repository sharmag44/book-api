'use strict';
const { DataTypes } = require('sequelize');
module.exports = () => {
    var model = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            defaultValue: null

        },
        authorName: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        isbn: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        price: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },

    };
    return sequelize.define('book', model);
};
