const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/credit-track-backend')
    .then(() => winston.info('Connected to MongoDB...'));
}