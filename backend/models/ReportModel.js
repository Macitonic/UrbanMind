import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  imageUrl: String,
  description: String,
  phoneNumber: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(?:0|\+254)\s*(?:7\d|1\d)\d{7}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number format!`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Report", ReportSchema);
