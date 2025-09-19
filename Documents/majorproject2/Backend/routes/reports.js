// reports.js
import express from "express";
import multer from "multer";
import path from "path";
import Report from "../models/Report.js";

const router = express.Router();

// Image upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// POST route
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { petType, location, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }

    const newReport = new Report({
      petType,
      location,
      description,
      imagePath: `uploads/${req.file.filename}`,
    });

    await newReport.save();
    res.status(201).json({ message: "Report submitted successfully." });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to submit report." });
  }
});

// GET route
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
