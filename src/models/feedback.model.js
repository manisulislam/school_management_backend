import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comments: { type: String },
    
},{timestamps: true});

const Feedback = mongoose.model('Feedback', feedbackSchema);
