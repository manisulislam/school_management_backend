import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    graduationYear: { type: Number, required: true },
    currentPosition: { type: String },
    contactInformation: { type: String },
    
},{timestamps: true});

const Alumni = mongoose.model('Alumni', alumniSchema);
