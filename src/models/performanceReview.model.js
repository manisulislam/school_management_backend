import mongoose from "mongoose";

const performanceReviewSchema = new mongoose.Schema({
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    reviewDate: { type: Date, required: true },
    feedback: { type: String, required: true },
    reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' } // Assuming you have an Admin model
},{timestamps:true});

const PerformanceReview = mongoose.model('PerformanceReview', performanceReviewSchema);
