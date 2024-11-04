import mongoose from "mongoose";

const courseMaterialSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    fileUrl: { type: String, required: true }, // URL to the material file
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    
},{timestamps: true});

const CourseMaterial = mongoose.model('CourseMaterial', courseMaterialSchema);
