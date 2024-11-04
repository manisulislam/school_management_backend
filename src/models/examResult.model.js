import mongoose from "mongoose";

const examResultSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
    marksObtained: { type: Number, required: true },
    grade: { type: String } // e.g., A, B, C, etc.
},{timestamps: true});

const ExamResult = mongoose.model('ExamResult', examResultSchema);
