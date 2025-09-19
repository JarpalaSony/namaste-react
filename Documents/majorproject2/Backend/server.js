import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reportRoutes from "./routes/reports.js";
import petroutes from "./routes/petroutes.js";
import reportLostPet from "./routes/reportLostPet.js";
dotenv.config();
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve uploaded images
app.use("/api/reports", reportRoutes);  //post
app.use("/api/pets",petroutes);//get
app.use("/api/lostpet",reportLostPet);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
