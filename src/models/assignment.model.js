import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }]
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
