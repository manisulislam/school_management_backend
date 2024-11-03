import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    className: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }]
});

const Class = mongoose.model('Class', classSchema);
