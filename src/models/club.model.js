import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
    clubName: { type: String, required: true },
    description: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    advisorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
},{timestamps: true});

const Club = mongoose.model('Club', clubSchema);
