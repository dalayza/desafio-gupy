var express = require('express');
var app = express();

const moviesC = require('../controllers/moviesController');

// ========================================================
// Get movie by ID
// ========================================================
app.get('/:id', [], async (req, res, next) => {
    var id = req.params.id;

    const movie = await moviesC.getMovieFilter(id);

    res.json(movie.data);
});

// ========================================================
// Get movie translation by ID
// ========================================================
app.get('/:id/translations', [], async (req, res, next) => {
    var id = req.params.id;

    const movie = await moviesC.getMovieTranslationFilter(id);

    res.json(movie.data);
});

module.exports = app;