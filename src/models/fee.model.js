import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    paymentStatus: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },
    paymentDate: { type: Date },
    
},{timestamps: true});

const Fee = mongoose.model('Fee', feeSchema);
