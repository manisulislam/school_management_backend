import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    term: { type: String, required: true },
    score: { type: Number, required: true }
},{timestamps: true});

const Grade = mongoose.model('Grade', gradeSchema);
