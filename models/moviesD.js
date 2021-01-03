'use strict'
const validator = require('../utils/validator.utils');

const Joi = require('@hapi/joi');

let schema = Joi.object().keys({
    movieId: Joi.required().error(validator.message),
    petition: Joi.required().error(validator.message),
    languaje: Joi.required().error(validator.message),
    genero: Joi.string(),
    popularity: Joi.number()
});

class MovieD {

    constructor(body) {
        this.movieId = body.movieId;
        this.petition = body.petition;
        this.languaje = body.languaje;
        this.genero = body.genero;
        this.population = body.population;
    }

    isValid() {
        this.erros = validator.validate(this, schema) || [];
        return this.erros.length === 0;
    }

    getErros() {
        return this.erros;
    }
}

module.exports = MovieD;

// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var moviesSchema = new Schema({
//     movieId: {
//         type: String,
//         require: true
//     },
//     petition: {
//         type: String,
//         require: true
//     },  
//     languaje: {
//         type: String,
//         require: true
//     },   
//     genero: {
//         type: String,
//         require: true
//     },
//     popularity: {
//         type: Number,
//         require: true
//     },
// }, { collection: 'movies' });

// module.exports = mongoose.model( 'Movies', moviesSchema );