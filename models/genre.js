const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {type: String, minLength: 3, maxLength: 100, required: true},
});

// Virtual for genre's url
GenreSchema
    .virtual('url')
    .get(() => '/catalog/genre/' + this._id);

module.exports = mongoose.model('Genre', GenreSchema);