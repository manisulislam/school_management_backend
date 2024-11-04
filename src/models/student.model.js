import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    enrollmentDate: { type: Date, default: Date.now },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
    grades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Grade' }],
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' }
},{timestamps:true});

const Student = mongoose.model('Student', studentSchema);
