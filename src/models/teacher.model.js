import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subjectSpecialization: { type: String, required: true },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
},{timestamps:true});

const Teacher = mongoose.model('Teacher', teacherSchema);
