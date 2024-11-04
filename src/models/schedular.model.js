import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' }, // Optional for classes without exams
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    location: { type: String }
},{timestamps:true});

const Schedule = mongoose.model('Schedule', scheduleSchema);
