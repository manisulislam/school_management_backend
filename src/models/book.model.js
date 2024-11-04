import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    publicationYear: { type: Number, required: true },
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
},{timestamps: true});

const Book = mongoose.model('Book', bookSchema);
