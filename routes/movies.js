var express = require('express');
var app = express();

const moviesC = require('../controllers/moviesController');

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

    await moviesC.saveTranslationsMovieDetails(
        id,
        'GET',
        movie.data.translations
    );

    res.json(movie.data);
});

module.exports = app;