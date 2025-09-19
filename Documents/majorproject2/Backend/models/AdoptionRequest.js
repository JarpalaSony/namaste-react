import mongoose from "mongoose";

const adoptionRequestSchema = new mongoose.Schema({
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet", // assuming your pet model is named "Pet"
    required: true,
  },
  adopterName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    default: "",
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
});

const AdoptionRequest = mongoose.model("AdoptionRequest", adoptionRequestSchema);
export default AdoptionRequest;
