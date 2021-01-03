var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var moviesSchema = new Schema({
    movieId: {
        type: String,
        require: true
    },
    petition: {
        type: String,
        require: true
    },  
    languaje: {
        type: String,
        require: true
    },   
    genero: {
        type: String,
        require: true
    },
    popularity: {
        type: Number,
        require: true
    },
}, { collection: 'movies' });

module.exports = mongoose.model( 'Movies', moviesSchema );