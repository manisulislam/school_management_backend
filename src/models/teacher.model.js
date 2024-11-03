import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    subjectSpecialization: { type: String, required: true },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
});

const Teacher = mongoose.model('Teacher', teacherSchema);
