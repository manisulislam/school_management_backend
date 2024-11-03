import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectName: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
});

const Subject = mongoose.model('Subject', subjectSchema);
