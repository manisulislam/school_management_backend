import mongoose from "mongoose";

const healthRecordSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    allergies: { type: String },
    medications: { type: String },
    medicalConditions: { type: String },
    emergencyContact: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);
