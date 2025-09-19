import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  breed: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String, // Stores the path to the uploaded image
  },
});

export default mongoose.model("Pet", petSchema);
