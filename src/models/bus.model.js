import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
    routeNumber: { type: String, required: true },
    driverName: { type: String, required: true },
    capacity: { type: Number, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const Bus = mongoose.model('Bus', busSchema);
