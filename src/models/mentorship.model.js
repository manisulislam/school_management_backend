import mongoose from "mongoose";

const mentorshipSchema = new mongoose.Schema({
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    menteeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    startDate: { type: Date, required: true },
    goals: { type: String },
    progress: { type: String }
},{timestamps: true});

const Mentorship = mongoose.model('Mentorship', mentorshipSchema);
