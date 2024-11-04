import mongoose from "mongoose";

const reportCardSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    term: { type: String, required: true }, // e.g., Term 1, Term 2
    grades: [{ 
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
        score: { type: Number, required: true }
    }],
    comments: { type: String },
    
},{timestamps:true});

const ReportCard = mongoose.model('ReportCard', reportCardSchema);
