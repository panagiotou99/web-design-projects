const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {
        type: Number,
        required: true
        // unique: true 
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String
    }
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;