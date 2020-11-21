const Book = require('../models/book');

// Display list of all books
exports.book_list = (req, res) => {
    res.send('Not implemented: book list');
};

// Display detail page for a specific book
exports.book_detail = (req, res) => {
    res.send('Not implemented: book detail:' + req.params.id);
};

// Display Book create form on GET.
exports.book_create_get = (req, res) => {
    res.send('Not implemented: book create GET');
};

// Handle Book create on POST.
exports.book_create_post = (req, res) => {
    res.send('Not implemented: book create POST');
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
    res.send('Not implemented: book update GET');
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
    res.send('Not implemented: book update POST');
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
    res.send('Not implemented: book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
    res.send('Not implemented: book delete POST');
};
