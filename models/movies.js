var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var moviesSchema = new Schema({
    doctorId: {
        type: String,
        require: false
    },
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Pacientes',
        require: false
    },  
    seguroAfiliado: {
        type: Schema.Types.ObjectId,
        ref: 'Seguro Afiliado',
        require: false
    },   
    fecha: {
        type: String,
        require: false
    },
    laboratorio: {
        type: String,
        require: false
    },
    imagenologia: {
        type: String,
        require: false
    }, 
    patologia: {
        type: String,
        require: false
    }, 
    interconsultas: {
        type: String,
        require: false
    },
    firmaMedico: {
        type: String,
        require: false
    },
}, { collection: 'movies' });

module.exports = mongoose.model( 'Movies', moviesSchema );