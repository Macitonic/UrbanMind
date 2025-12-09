import mongoose from "mongoose";


const ReportSchema = new mongoose.Schema({
    imageUrl: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


export default mongoose.model("Report", ReportSchema);