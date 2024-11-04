import mongoose from "mongoose";


const jobPostingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String },
    contactEmail: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
    
},{timestamps: true});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);
