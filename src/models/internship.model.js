import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    feedback: { type: String }
},{timestamps: true});

const Internship = mongoose.model('Internship', internshipSchema);
