const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');
const sequelize = require('sequelize')

let initModels = () => {
    let db = {};
    fs.readdirSync(__dirname)
        .filter((file) => {
            return file.indexOf('.') !== 0 && file !== basename;
        })
        .forEach((file) => {
            const model = require(path.join(__dirname, file))(
                sequelize,
                Sequelize
            );
            db[model.name] = model;
        });


    return db;
};
module.exports = initModels();
