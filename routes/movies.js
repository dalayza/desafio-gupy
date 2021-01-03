var express = require('express');
var app = express();

const moviesC = require('../controllers/moviesController');

// ========================================================
// Get all movies
// ========================================================
app.get('/:id', [], async (req, res, next) => {
    var id = req.params.id;

    const movie = await moviesC.getMovieFilter(id);

    res.json(movie.data);
});

module.exports = app;