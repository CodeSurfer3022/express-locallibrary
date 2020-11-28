const Genre = require('../models/genre');
const Book = require('../models/book');
const async = require('async');
const  mongoose = require('mongoose');

// Display list of all genres
exports.genre_list = function (req, res, next) {
    Genre.find()
      .sort([['name', 'ascending']])
      .exec(function (err, list_genres) {
          if(err) {
              return next(err);
          }
          res.render('genre_list', {title: 'Genre list', genre_list: list_genres});
      });

};

// Display detail page for a specific genre
exports.genre_detail = function(req, res, next) {
    const id = mongoose.Types.ObjectId(req.params.id);

    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id)
              .exec(callback);
        },

        genre_books: function(callback) {
            Book.find({ 'genre': req.params.id })
              .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.genre==null) { // No results.
            var err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
    });

};

// Display Genre create form on GET.
exports.genre_create_get = (req, res) => {
    res.send('Not implemented: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = (req, res) => {
    res.send('Not implemented: Genre create POST');
};

// Display Genre update form on GET.
exports.genre_update_get = (req, res) => {
    res.send('Not implemented: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = (req, res) => {
    res.send('Not implemented: Genre update POST');
};

// Display Genre delete form on GET.
exports.genre_delete_get = (req, res) => {
    res.send('Not implemented: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = (req, res) => {
    res.send('Not implemented: Genre delete POST');
};


