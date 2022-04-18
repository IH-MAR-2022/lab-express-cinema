const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(function (allMovies) {
      console.log("Found movies", allMovies);
      res.render("movies", { allMovies: allMovies });
    })
    .catch(function (err) {
      console.log("Something went wrong", err.message);
    });
});

module.exports = router;
