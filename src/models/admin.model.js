import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    role: { type: String, enum: ['SuperAdmin', 'Admin'], required: true }
});

const Admin = mongoose.model('Admin', adminSchema);
