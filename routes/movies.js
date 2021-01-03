var express = require('express');
var app = express();

const moviesC = require('../controllers/moviesController');

var MovieD = require('../models/moviesD');
var MovieT = require('../models/moviesT');

// ========================================================
// Get movie by ID
// ========================================================
app.get('/:id', [], async (req, res, next) => {
    var id = req.params.id;

    const movie = await moviesC.getMovieFilter(id);

    await moviesC.saveMovieDetails(
        id,
        'GET',
        movie.data.original_title,
        movie.data.original_languagem,
        movie.data.genres[0].name,
        movie.data.popularity
    );

    res.json(movie.data);
});

// ========================================================
// Get movie translation by ID
// ========================================================
app.get('/:id/translations', [], async (req, res, next) => {
    var id = req.params.id;

    const movie = await moviesC.getMovieTranslationsFilter(id);

    await moviesC.saveTranslationsMovie(
        id,
        'GET',
        movie.data.translations
    );

    res.json(movie.data);
});

// ========================================================
// Create movie details
// ========================================================
app.post('/details', [], (req, res) => {
    var body = req.body;

    var movieD = new MovieD({
        movieId: body.id,
        petition: body.petition,
        title: body.title,
        languaje: body.languaje,
        genero: body.genero,
        popularity: body.popularity
    });

    movieD.save((err, movieDSave) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error create movie details!!!',
                errors: err
            });
        }
        res.status(201).json(movieDSave);
    });
});

// ========================================================
// Create movie tranlations
// ========================================================
app.post('/tranlations', [], (req, res) => {
    var body = req.body;

    var movieT = new MovieT({
        movieId: body.id,
        petition: body.petition,
        name: body.name
    });

    movieT.save((err, movieTSave) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error create movie trablations!!!',
                errors: err
            });
        }
        res.status(201).json(movieTSave);
    });
});

module.exports = app;