var mongoose = require('mongoose');
var Stock = require('../models/stock.js');

exports.find = function() {
    return Stock.find();
}