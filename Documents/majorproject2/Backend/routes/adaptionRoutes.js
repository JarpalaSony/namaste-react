import express from "express";
import AdoptionRequest from "../models/AdoptionRequest.js";

const router = express.Router();

// @route   POST /api/adoptions
// @desc    Submit an adoption request
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { petId, adopterName, contact, reason } = req.body;

    // Simple validation
    if (!petId || !adopterName || !contact) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    const newRequest = new AdoptionRequest({
      petId,
      adopterName,
      contact,
      reason,
    });

    const savedRequest = await newRequest.save();
    res.status(201).json({ message: "Adoption request submitted successfully!", data: savedRequest });
  } catch (err) {
    console.error("Error submitting adoption request:", err);
    res.status(500).json({ message: "Server Error. Please try again later." });
  }
});

// @route   GET /api/adoptions
// @desc    Get all adoption requests (for admin use)
// @access  Public (You can restrict it later)
router.get("/", async (req, res) => {
  try {
    const requests = await AdoptionRequest.find().populate("petId", "name type breed");
    res.json(requests);
  } catch (err) {
    console.error("Error fetching adoption requests:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
