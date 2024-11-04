import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const Parent = mongoose.model('Parent', parentSchema);
