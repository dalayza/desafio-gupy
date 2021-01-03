'use strict'
const validator = require('../utils/validator.utils');

const Joi = require('@hapi/joi');

let schema = Joi.object().keys({
    movieId: Joi.required().error(validator.message),
    petition: Joi.required().error(validator.message),
    name: Joi.required().error(validator.message)
});

class MovieT {

    constructor(body) {
        this.movieId = body.movieId;
        this.petition = body.petition;
        this.name = body.name;
    }

    isValid() {
        this.erros = validator.validate(this, schema) || [];
        return this.erros.length === 0;
    }

    getErros() {
        return this.erros;
    }
}

module.exports = MovieT;

// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var movieTSchema = new Schema({
//     petition: {
//         type: String,
//         require: true
//     },  
//     name: {
//         type: Array,
//         require: true
//     },
// }, { collection: 'moviesT' });

// module.exports = mongoose.model( 'MoviesTranlations', movieTSchema );