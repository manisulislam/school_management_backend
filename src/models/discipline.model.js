import mongoose from "mongoose";

const disciplineSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    incidentDate: { type: Date, required: true },
    description: { type: String, required: true },
    actionTaken: { type: String }, // e.g., warning, suspension
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
});

const Discipline = mongoose.model('Discipline', disciplineSchema);
