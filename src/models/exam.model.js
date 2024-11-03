import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    examName: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    examDate: { type: Date, required: true },
    totalMarks: { type: Number, required: true },
    results: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ExamResult' }]
});

const Exam = mongoose.model('Exam', examSchema);
