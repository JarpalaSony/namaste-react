import express from 'express';
import multer from 'multer';
import path from 'path';
import LostPet from '../models/LostPet.js';

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// POST: Report a lost pet
router.post('/report', upload.single('petPhoto'), async (req, res) => {
  try {
    console.log("POST /api/lostpet/report hit");
    const petData = { ...req.body, petPhoto: req.file?.filename };
    const pet = new LostPet(petData);
    await pet.save();
    res.json({ message: 'Report submitted successfully', pet });
  } catch (error) {
    res.status(500).json({ error: 'Failed to report lost pet' });
  }
});

// GET: Retrieve all reported lost pets
router.get('/reports', async (req, res) => {
  try {
    const pets = await LostPet.find().sort({ _id: -1 });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
});

export default router;
