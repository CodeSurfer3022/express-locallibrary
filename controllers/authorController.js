const Author = require('../models/author');

// Display list of all authors
exports.author_list = (req, res) => {
    res.send('Not implemented: Author list');
};

// Display detail page of a specific author
exports.author_detail = (req, res) => {
    res.send('Not implemented: Author detail: ' + req.params.id);
};

// Display author create form on GET.
exports.author_create_get = (req, res) => {
    res.send('Not implemented: Author create GET');
};

// Handle author create on POST.
exports.author_create_post = (req, res) => {
    res.send('Not implemented: Author create POST');
};

// Display author delete form on GET.
exports.author_delete_get = (req, res) => {
    res.send('Not implemented: Author delete GET');
};

// Handle author delete on POST.
exports.author_delete_post = (req, res) => {
    res.send('Not implemented: Author delete POST')
};

// Display author update form on GET.
exports.author_update_get = (req, res) => {
    res.send('Not implemented: Author update GET');
};

// Handle author update on POST.
exports.author_update_post = (req, res) => {
    res.send('Not implemented: Author update POST');
};