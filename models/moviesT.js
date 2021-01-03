var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieTSchema = new Schema({
    petition: {
        type: String,
        require: true
    },  
    name: {
        type: Array,
        require: true
    },
}, { collection: 'moviesT' });

module.exports = mongoose.model( 'MoviesTranlations', movieTSchema );