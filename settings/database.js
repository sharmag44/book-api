'use strict';
const dbConfig = require('config').get("db");
const Sequelize = require('sequelize');

module.exports.configure = () => {
    console.log("Connecting to database = " + JSON.stringify(dbConfig));
    const sequelize = new Sequelize(
        dbConfig.database,
        dbConfig.username,
        dbConfig.password,
        {
            host: dbConfig.host,
            port: dbConfig.port,
            dialect: dbConfig.dialect,
            logging: false,
        }
    );
    global.sequelize = sequelize;
    global.db = require("../models");

    sequelize.sync({ alter: false }).then(() => {
        console.log('PostgreSQL DB connected');
    }).catch(function (err) {
        console.log(err);
        console.log('DB Connection Failed');
    });
};

