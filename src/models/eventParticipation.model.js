import mongoose from "mongoose";

const eventParticipationSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    role: { type: String }, // e.g., participant, organizer
    feedback: { type: String }
},{timestamps: true});

const EventParticipation = mongoose.model('EventParticipation', eventParticipationSchema);
