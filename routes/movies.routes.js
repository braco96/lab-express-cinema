// Rutas relacionadas con las películas
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('movie-details', { movie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
