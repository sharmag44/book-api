require('dotenv').config();
var express = require('express');
var http = require('http');
var app = express();


const webServerConfig = require("config").get("webServer");
var server = http.createServer(app);

try {
    require("./settings/database").configure(app);
    require('./settings/express').configure(app);
    require('./settings/routes').configure(app);

}
catch (err) {
    console.log(err);
}

server.listen(webServerConfig.port, function () {
    console.log('listening on port: ' + `${webServerConfig.port}`);
});