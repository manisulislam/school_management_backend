import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
},{timestamps: true});

const Event = mongoose.model('Event', eventSchema);
