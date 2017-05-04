var path = require('path');
var app = require('express').Router();
var db = require('../utils/DataBaseUtils');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = app;