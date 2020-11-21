const BookInstance = require('../models/bookinstance');

// Display list of all book instances
exports.bookinstance_list = (req, res) => {
    res.send('Not implemented: BookInstance list');
};

// Display detail page for a specific BookInstance
exports.bookinstance_detail = (req, res) => {
    res.send('Not implemented: BookInstance detail' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
    res.send('Not implemented: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = (req, res) => {
    res.send('Not implemented: BookInstance create POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = (req, res) => {
    res.send('Not implemented: BookInstance update GET');
};

// Handle BookInstance update on POST.
exports.bookinstance_update_post = (req, res) => {
    res.send('Not implemented: BookInstance update POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
    res.send('Not implemented: BookInstance delete GET');
};

exports.bookinstance_delete_post = (req, res) => {
    res.send('Not implemented: BookInstance delte POST');
}