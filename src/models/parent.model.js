import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    studentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const Parent = mongoose.model('Parent', parentSchema);
