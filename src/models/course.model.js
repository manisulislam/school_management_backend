import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    description: { type: String },
    credits: { type: Number, required: true },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
},{timestamps: true});

const Course = mongoose.model('Course', courseSchema);
