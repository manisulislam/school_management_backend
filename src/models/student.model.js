import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    enrollmentDate: { type: Date, default: Date.now },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
    grades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Grade' }],
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' }
});

const Student = mongoose.model('Student', studentSchema);
