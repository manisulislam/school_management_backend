import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }, // Can also reference Teacher or Parent
    isRead: { type: Boolean, default: false },
    
},{timestamps: true});

const Notification = mongoose.model('Notification', notificationSchema);
