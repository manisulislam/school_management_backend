import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roleLevel: { type: String, enum: ['SuperAdmin', 'Admin'], required: true }
});

const Admin = mongoose.model('Admin', adminSchema);
