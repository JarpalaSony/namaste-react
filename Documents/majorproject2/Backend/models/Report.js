// Report.js
import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  petType: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String },
  dateReported: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);
export default Report;
